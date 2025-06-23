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
      user: process.env.EMAIL_USER || 'info@cvrcorpacs.com',
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
        from: `"CVR Corpacs Website" <${process.env.EMAIL_USER || 'info@cvrcorpacs.com'}>`,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER || 'info@cvrcorpacs.com',
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
        from: `"CVR Corpacs" <${process.env.EMAIL_USER || 'info@cvrcorpacs.com'}>`,
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
          sessionId: preferences.sessionId,
          serviceType: rec.serviceType,
          confidence: rec.confidence,
          reasons: rec.reasons,
          priority: rec.priority,
          metadata: rec.metadata,
          isViewed: rec.isViewed,
          isClicked: rec.isClicked,
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
            sessionId: validatedData.sessionId,
            serviceType: rec.serviceType,
            confidence: rec.confidence,
            reasons: rec.reasons,
            priority: rec.priority,
            metadata: rec.metadata,
            isViewed: rec.isViewed,
            isClicked: rec.isClicked,
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
    return await generateDeepSeekRecommendations(preferences, interactions);
  } catch (error) {
    console.error('DeepSeek AI recommendation error:', error);
    return generateFallbackRecommendations(preferences, interactions);
  }
}

// DeepSeek AI-powered recommendation generation
async function generateDeepSeekRecommendations(
  preferences: UserPreferences, 
  interactions: any[] = []
): Promise<Omit<Recommendation, 'id' | 'sessionId' | 'createdAt'>[]> {
  
  // Prepare user context for DeepSeek AI
  const userContext = {
    businessType: preferences.businessType || 'Not specified',
    industry: preferences.industry || 'Not specified', 
    companySize: preferences.companySize || 'Not specified',
    primaryConcerns: Array.isArray(preferences.primaryConcerns) ? preferences.primaryConcerns : [],
    urgency: preferences.urgency || 'Not specified',
    location: preferences.location || 'Not specified',
    recentInteractions: interactions.slice(-5).map(i => ({
      serviceType: i.serviceType,
      type: i.interactionType,
      timestamp: i.createdAt
    }))
  };

  const serviceOptions = [
    {
      id: 'direct-tax',
      name: 'Direct Tax Services',
      description: 'Corporate tax planning, income tax returns, TDS compliance, tax assessments, and litigation support. Ideal for businesses needing comprehensive tax advisory and compliance services.',
      targetClients: 'MNCs, SMEs, high-income individuals, businesses with complex tax structures',
      keyBenefits: 'Tax optimization, compliance assurance, reduced liability, expert representation'
    },
    {
      id: 'indirect-tax', 
      name: 'Indirect Tax Services',
      description: 'GST advisory, VAT compliance, customs clearance, input tax credit optimization, and indirect tax assessments. Perfect for trading and manufacturing businesses.',
      targetClients: 'Manufacturers, traders, importers/exporters, service providers with GST obligations',
      keyBenefits: 'GST compliance, cost optimization, smooth operations, reduced penalties'
    },
    {
      id: 'accounting-mis',
      name: 'Accounting & MIS',
      description: 'Complete accounting solutions, financial reporting, MIS preparation, bookkeeping, and audit support. Essential for businesses requiring systematic financial management.',
      targetClients: 'SMEs, startups, growing businesses, companies needing financial clarity',
      keyBenefits: 'Financial transparency, informed decisions, regulatory compliance, growth support'
    },
    {
      id: 'business-support-services',
      name: 'Business Support Services', 
      description: 'Business incorporation, talent acquisition, manpower solutions, operational support, and debt recovery. Comprehensive support for business operations and growth.',
      targetClients: 'Startups, small businesses, entrepreneurs, companies needing operational support',
      keyBenefits: 'Business setup, skilled workforce, operational efficiency, growth acceleration'
    }
  ];

  const prompt = `You are CVR Corpacs' expert business consultant AI with deep knowledge of Indian business consulting services. Analyze this client profile and provide intelligent service recommendations.

**CLIENT PROFILE:**
- Business Type: ${userContext.businessType}
- Industry: ${userContext.industry}
- Company Size: ${userContext.companySize}  
- Primary Concerns: ${userContext.primaryConcerns.length > 0 ? userContext.primaryConcerns.join(', ') : 'Not specified'}
- Urgency Level: ${userContext.urgency}
- Location: ${userContext.location}
- Recent Service Interactions: ${userContext.recentInteractions.length > 0 ? JSON.stringify(userContext.recentInteractions) : 'None'}

**AVAILABLE SERVICES:**
${serviceOptions.map(s => `
${s.id.toUpperCase()}:
Name: ${s.name}
Description: ${s.description}
Target Clients: ${s.targetClients}
Key Benefits: ${s.keyBenefits}
`).join('\n')}

**ANALYSIS REQUIREMENTS:**
Please provide a detailed analysis and recommend 1-3 most suitable services. Consider:
1. Business type and industry alignment
2. Company size and complexity needs
3. Specific concerns and pain points
4. Urgency level and timeline requirements
5. Previous interaction patterns
6. Cross-service synergies and dependencies

**RESPONSE FORMAT (JSON only):**
{
  "recommendations": [
    {
      "serviceType": "service-id",
      "confidence": 85,
      "priority": 1,
      "reasons": [
        "Specific reason 1 based on client profile",
        "Specific reason 2 addressing client concerns", 
        "Specific reason 3 highlighting business value"
      ],
      "businessImpact": "Clear description of expected business impact",
      "timeline": "Recommended engagement timeline",
      "synergies": ["other-service-ids that complement this recommendation"]
    }
  ],
  "overallStrategy": "Brief strategy summary for the client's business needs"
}

**GUIDELINES:**
- Only recommend services with confidence score 70-95%
- Priority: 1=highest, 5=lowest
- Provide 3-4 specific, actionable reasons per recommendation
- Focus on business value and ROI
- Consider Indian business context and regulations
- Be concise but insightful`;

  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-reasoner',
      messages: [{
        role: 'user',
        content: prompt
      }],
      max_tokens: 3000,
      temperature: 0.2,
      top_p: 0.9,
    }),
  });

  if (!response.ok) {
    throw new Error(`DeepSeek API error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  const aiResponse = data.choices[0].message.content;
  
  // Extract JSON from AI response
  const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    console.error('DeepSeek response format error:', aiResponse);
    throw new Error('Failed to parse DeepSeek AI response');
  }

  const parsedResponse = JSON.parse(jsonMatch[0]);
  
  if (!parsedResponse.recommendations || !Array.isArray(parsedResponse.recommendations)) {
    throw new Error('Invalid recommendation format from DeepSeek AI');
  }

  // Transform DeepSeek recommendations to our format
  return parsedResponse.recommendations.map((rec: any) => ({
    serviceType: rec.serviceType,
    confidence: Math.max(70, Math.min(95, rec.confidence || 75)),
    priority: Math.max(1, Math.min(5, rec.priority || 3)),
    reasons: JSON.stringify(rec.reasons || ['AI-recommended service for your business needs']),
    metadata: JSON.stringify({
      aiGenerated: true,
      model: 'deepseek-reasoner',
      userProfile: userContext,
      businessImpact: rec.businessImpact || '',
      timeline: rec.timeline || '',
      synergies: rec.synergies || [],
      overallStrategy: parsedResponse.overallStrategy || '',
      generatedAt: new Date().toISOString()
    }),
    isViewed: false,
    isClicked: false,
  }));
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
      reasons: JSON.stringify(reasons),
      priority: profile.priority,
      metadata: JSON.stringify({
        fallbackMode: true,
        businessTypeMatch: preferences.businessType && profile.businessTypes.includes(preferences.businessType)
      }),
      isViewed: false,
      isClicked: false,
    });
  }

  return recommendations.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
}
