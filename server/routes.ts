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

// DeepSeek AI-powered Recommendation Algorithm
async function generateRecommendations(
  preferences: UserPreferences, 
  interactions: any[] = []
): Promise<Omit<Recommendation, 'id' | 'sessionId' | 'createdAt'>[]> {
  try {
    // Prepare context for DeepSeek AI
    const userContext = {
      businessType: preferences.businessType,
      industry: preferences.industry,
      companySize: preferences.companySize,
      primaryConcerns: preferences.primaryConcerns,
      urgency: preferences.urgency,
      location: preferences.location,
      recentInteractions: interactions.map(i => ({ serviceType: i.serviceType, type: i.interactionType }))
    };

    const serviceOptions = [
      {
        id: 'direct-tax',
        name: 'Direct Tax Services',
        description: 'Professional tax advisory, corporate tax returns, TDS compliance, assessment support, and litigation assistance'
      },
      {
        id: 'indirect-tax', 
        name: 'Indirect Tax Services',
        description: 'GST advisory, VAT compliance, customs work, input tax credit management, and indirect tax assessments'
      },
      {
        id: 'accounting-mis',
        name: 'Accounting & MIS',
        description: 'Account maintenance, financial reporting, business analysis, fixed assets management, and audit support'
      },
      {
        id: 'business-support-services',
        name: 'Business Support Services',
        description: 'Business formation, talent acquisition, manpower supply, operations management, and debt recovery'
      }
    ];

    const prompt = `You are an expert business consultant AI. Analyze the following user profile and recommend the most suitable consulting services.

User Profile:
- Business Type: ${userContext.businessType || 'Not specified'}
- Industry: ${userContext.industry || 'Not specified'}
- Company Size: ${userContext.companySize || 'Not specified'}
- Primary Concerns: ${Array.isArray(userContext.primaryConcerns) ? userContext.primaryConcerns.join(', ') : 'Not specified'}
- Urgency: ${userContext.urgency || 'Not specified'}
- Location: ${userContext.location || 'Not specified'}
- Recent Interactions: ${userContext.recentInteractions.length > 0 ? JSON.stringify(userContext.recentInteractions) : 'None'}

Available Services:
${serviceOptions.map(s => `${s.id}: ${s.name} - ${s.description}`).join('\n')}

Please provide recommendations in the following JSON format:
{
  "recommendations": [
    {
      "serviceType": "service-id",
      "confidence": 85,
      "priority": 1,
      "reasons": ["Reason 1", "Reason 2", "Reason 3"]
    }
  ]
}

Rules:
1. Recommend 1-3 most relevant services only
2. Confidence score should be 0-100 based on how well the service matches the user profile
3. Priority should be 1-5 (1 = highest priority)
4. Provide 2-4 specific reasons for each recommendation
5. Consider business type, industry, concerns, and urgency in your analysis
6. Only recommend services with confidence >= 60`;

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-reasoner',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    // Parse AI response
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }

    const aiRecommendations = JSON.parse(jsonMatch[0]);
    
    return aiRecommendations.recommendations.map((rec: any) => ({
      serviceType: rec.serviceType,
      confidence: Math.max(60, Math.min(100, rec.confidence)),
      priority: Math.max(1, Math.min(5, rec.priority)),
      reasons: rec.reasons || [],
      metadata: {
        aiGenerated: true,
        model: 'deepseek-reasoner',
        userProfile: userContext
      },
      isViewed: false,
      isClicked: false,
    }));

  } catch (error) {
    console.error('DeepSeek AI recommendation error:', error);
    
    // Fallback to rule-based recommendations
    return generateFallbackRecommendations(preferences, interactions);
  }
}

// Fallback recommendation system
function generateFallbackRecommendations(
  preferences: UserPreferences, 
  interactions: any[] = []
): Omit<Recommendation, 'id' | 'sessionId' | 'createdAt'>[] {
  const recommendations: Omit<Recommendation, 'id' | 'sessionId' | 'createdAt'>[] = [];
  
  const serviceProfiles = {
    'direct-tax': {
      businessTypes: ['MNC', 'SME', 'Individual'],
      concerns: ['tax-compliance', 'tax-planning', 'assessments', 'litigation'],
      industries: ['all'],
      priority: 1
    },
    'indirect-tax': {
      businessTypes: ['MNC', 'SME', 'Trading'],
      concerns: ['gst-compliance', 'customs-issues', 'input-tax-credit'],
      industries: ['manufacturing', 'trading', 'import-export'],
      priority: 2
    },
    'accounting-mis': {
      businessTypes: ['SME', 'Startup', 'MNC'],
      concerns: ['accounting-compliance', 'financial-reporting', 'audit-support'],
      industries: ['all'],
      priority: 3
    },
    'business-support-services': {
      businessTypes: ['Startup', 'SME'],
      concerns: ['business-formation', 'operational-support', 'manpower-needs'],
      industries: ['all'],
      priority: 4
    }
  };

  for (const [serviceType, profile] of Object.entries(serviceProfiles)) {
    let score = 60; // Base score
    const reasons: string[] = ['Based on general business needs'];

    if (preferences.businessType && profile.businessTypes.includes(preferences.businessType)) {
      score += 20;
      reasons.push(`Suitable for ${preferences.businessType} businesses`);
    }

    if (preferences.primaryConcerns && Array.isArray(preferences.primaryConcerns)) {
      const matchingConcerns = preferences.primaryConcerns.filter(concern => profile.concerns.includes(concern));
      if (matchingConcerns.length > 0) {
        score += matchingConcerns.length * 10;
        reasons.push(`Addresses your ${matchingConcerns.join(', ')} concerns`);
      }
    }

    recommendations.push({
      serviceType,
      confidence: Math.min(score, 95),
      reasons,
      priority: profile.priority,
      metadata: {
        fallbackMode: true,
        businessTypeMatch: preferences.businessType && profile.businessTypes.includes(preferences.businessType)
      },
      isViewed: false,
      isClicked: false,
    });
  }

  return recommendations.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
}
