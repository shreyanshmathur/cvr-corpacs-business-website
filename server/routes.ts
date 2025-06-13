import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email transporter configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER || 'info@cvrcorpac.com',
      pass: process.env.EMAIL_PASS || 'Anni*2005',
    },
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      const mailOptions = {
        from: `"CVR Corpacs Website" <${process.env.EMAIL_USER || 'info@cvrcorpac.com'}>`,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER || 'info@cvrcorpac.com',
        subject: `Contact Form: ${validatedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone || 'Not provided'}
          Subject: ${validatedData.subject}
          
          Message:
          ${validatedData.message}
        `,
      };
      
      await transporter.sendMail(mailOptions);
      
      // Send auto-reply to the user
      const autoReplyOptions = {
        from: `"CVR Corpacs" <${process.env.EMAIL_USER || 'info@cvrcorpac.com'}>`,
        to: validatedData.email,
        subject: 'Thank you for contacting CVR Corpacs',
        html: `
          <h2>Thank you for contacting CVR Corpacs</h2>
          <p>Dear ${validatedData.name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of your inquiry:</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          <br>
          <p>Best regards,</p>
          <p>The CVR Corpacs Team</p>
        `,
      };
      
      await transporter.sendMail(autoReplyOptions);
      
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent successfully!',
        id: contactMessage.id
      });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      
      if (error instanceof Error && error.name === 'ZodError') {
        res.status(400).json({ 
          success: false, 
          message: 'Please fill all required fields correctly.' 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'Failed to send message. Please try again later.' 
        });
      }
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      res.status(500).json({ message: 'Failed to fetch messages' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
