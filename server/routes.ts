import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { 
  insertContactMessageSchema,
  insertUserPreferencesSchema,
  insertServiceInteractionSchema,
  insertRecommendationSchema,
  type UserPreferences,
  type Recommendation 
} from "@shared/schema";

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

  // Recommendation Engine API Routes
  
  // Save user preferences
  app.post("/api/preferences", async (req, res) => {
    try {
      const validatedData = insertUserPreferencesSchema.parse(req.body);
      const preferences = await storage.saveUserPreferences(validatedData);
      
      // Generate recommendations based on preferences
      const recommendations = await generateRecommendations(preferences);
      
      // Save recommendations
      for (const rec of recommendations) {
        await storage.saveRecommendation({
          ...rec,
          sessionId: preferences.sessionId,
        });
      }
      
      res.json({ success: true, preferences, recommendations });
    } catch (error) {
      console.error('Error saving preferences:', error);
      res.status(500).json({ message: 'Failed to save preferences' });
    }
  });

  // Get user preferences
  app.get("/api/preferences/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const preferences = await storage.getUserPreferences(sessionId);
      res.json(preferences || null);
    } catch (error) {
      console.error('Error fetching preferences:', error);
      res.status(500).json({ message: 'Failed to fetch preferences' });
    }
  });

  // Track service interaction
  app.post("/api/interactions", async (req, res) => {
    try {
      const validatedData = insertServiceInteractionSchema.parse(req.body);
      const interaction = await storage.trackServiceInteraction(validatedData);
      
      // Update recommendations based on interaction
      const preferences = await storage.getUserPreferences(validatedData.sessionId);
      if (preferences) {
        const updatedRecommendations = await generateRecommendations(preferences, [interaction]);
        
        // Save new recommendations
        for (const rec of updatedRecommendations) {
          await storage.saveRecommendation({
            ...rec,
            sessionId: validatedData.sessionId,
          });
        }
      }
      
      res.json({ success: true, interaction });
    } catch (error) {
      console.error('Error tracking interaction:', error);
      res.status(500).json({ message: 'Failed to track interaction' });
    }
  });

  // Get recommendations
  app.get("/api/recommendations/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const recommendations = await storage.getRecommendations(sessionId);
      res.json(recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      res.status(500).json({ message: 'Failed to fetch recommendations' });
    }
  });

  // Mark recommendation as viewed
  app.post("/api/recommendations/:id/viewed", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markRecommendationViewed(id);
      res.json({ success: true });
    } catch (error) {
      console.error('Error marking recommendation as viewed:', error);
      res.status(500).json({ message: 'Failed to update recommendation' });
    }
  });

  // Mark recommendation as clicked
  app.post("/api/recommendations/:id/clicked", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markRecommendationClicked(id);
      res.json({ success: true });
    } catch (error) {
      console.error('Error marking recommendation as clicked:', error);
      res.status(500).json({ message: 'Failed to update recommendation' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Recommendation Algorithm
async function generateRecommendations(
  preferences: UserPreferences, 
  interactions: any[] = []
): Promise<Omit<Recommendation, 'id' | 'sessionId' | 'createdAt'>[]> {
  const recommendations: Omit<Recommendation, 'id' | 'sessionId' | 'createdAt'>[] = [];
  
  const serviceProfiles = {
    'direct-tax': {
      keywords: ['tax', 'income', 'corporate', 'assessment', 'filing', 'tds', 'advance'],
      businessTypes: ['MNC', 'SME', 'Individual'],
      concerns: ['tax-compliance', 'tax-planning', 'assessments', 'litigation'],
      industries: ['all'],
      priority: 1
    },
    'indirect-tax': {
      keywords: ['gst', 'vat', 'customs', 'excise', 'indirect', 'input-credit'],
      businessTypes: ['MNC', 'SME', 'Trading'],
      concerns: ['gst-compliance', 'customs-issues', 'input-tax-credit'],
      industries: ['manufacturing', 'trading', 'import-export'],
      priority: 2
    },
    'accounting-mis': {
      keywords: ['accounting', 'books', 'financial', 'statements', 'audit', 'reconciliation'],
      businessTypes: ['SME', 'Startup', 'MNC'],
      concerns: ['accounting-compliance', 'financial-reporting', 'audit-support'],
      industries: ['all'],
      priority: 3
    },
    'business-support-services': {
      keywords: ['manpower', 'hiring', 'operations', 'registration', 'formation'],
      businessTypes: ['Startup', 'SME'],
      concerns: ['business-formation', 'operational-support', 'manpower-needs'],
      industries: ['all'],
      priority: 4
    }
  };

  // Score each service based on user preferences
  for (const [serviceType, profile] of Object.entries(serviceProfiles)) {
    let score = 0;
    const reasons: string[] = [];

    // Business type matching
    if (preferences.businessType && profile.businessTypes.includes(preferences.businessType)) {
      score += 25;
      reasons.push(`Ideal for ${preferences.businessType} businesses`);
    }

    // Industry matching
    if (preferences.industry && (profile.industries.includes('all') || profile.industries.includes(preferences.industry.toLowerCase()))) {
      score += 20;
      reasons.push(`Specialized for ${preferences.industry} industry`);
    }

    // Primary concerns matching
    if (preferences.primaryConcerns) {
      const concerns = Array.isArray(preferences.primaryConcerns) ? preferences.primaryConcerns : [];
      const matchingConcerns = concerns.filter(concern => profile.concerns.includes(concern));
      if (matchingConcerns.length > 0) {
        score += matchingConcerns.length * 15;
        reasons.push(`Addresses your ${matchingConcerns.join(', ')} concerns`);
      }
    }

    // Urgency weighting
    if (preferences.urgency === 'High') {
      score += 10;
      reasons.push('Quick turnaround available');
    }

    // Company size considerations
    if (preferences.companySize) {
      if (serviceType === 'business-support-services' && ['Small', 'Medium'].includes(preferences.companySize)) {
        score += 15;
        reasons.push('Perfect for growing businesses');
      }
      if (serviceType === 'direct-tax' && preferences.companySize === 'Large') {
        score += 15;
        reasons.push('Comprehensive tax solutions for large enterprises');
      }
    }

    // Interaction-based scoring
    const serviceInteractions = interactions.filter(i => i.serviceType === serviceType);
    if (serviceInteractions.length > 0) {
      score += serviceInteractions.length * 5;
      reasons.push('Based on your recent interest');
    }

    // Only recommend services with meaningful scores
    if (score >= 20) {
      recommendations.push({
        serviceType,
        confidence: Math.min(score, 100),
        reasons,
        priority: profile.priority,
        metadata: {
          businessTypeMatch: preferences.businessType && profile.businessTypes.includes(preferences.businessType),
          industryMatch: preferences.industry && profile.industries.includes(preferences.industry.toLowerCase()),
          concernsMatch: preferences.primaryConcerns ? 
            (Array.isArray(preferences.primaryConcerns) ? preferences.primaryConcerns : [])
              .filter(concern => profile.concerns.includes(concern)).length : 0
        },
        isViewed: false,
        isClicked: false,
      });
    }
  }

  // Sort by priority and confidence
  return recommendations.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return b.confidence - a.confidence;
  }).slice(0, 3); // Return top 3 recommendations
}
