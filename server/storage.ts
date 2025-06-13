import { 
  contactMessages, 
  type ContactMessage, 
  type InsertContactMessage, 
  users, 
  type User, 
  type InsertUser,
  userPreferences,
  type UserPreferences,
  type InsertUserPreferences,
  serviceInteractions,
  type ServiceInteraction,
  type InsertServiceInteraction,
  recommendations,
  type Recommendation,
  type InsertRecommendation,
} from "@shared/schema";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User methods for compatibility
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  
  // Recommendation engine methods
  saveUserPreferences(preferences: InsertUserPreferences): Promise<UserPreferences>;
  getUserPreferences(sessionId: string): Promise<UserPreferences | undefined>;
  updateUserPreferences(sessionId: string, preferences: Partial<InsertUserPreferences>): Promise<UserPreferences>;
  
  trackServiceInteraction(interaction: InsertServiceInteraction): Promise<ServiceInteraction>;
  getServiceInteractions(sessionId: string): Promise<ServiceInteraction[]>;
  
  saveRecommendation(recommendation: InsertRecommendation): Promise<Recommendation>;
  getRecommendations(sessionId: string): Promise<Recommendation[]>;
  markRecommendationViewed(id: number): Promise<void>;
  markRecommendationClicked(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const { db } = await import("./db");
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { db } = await import("./db");
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const { db } = await import("./db");
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const { db } = await import("./db");
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    const { db } = await import("./db");
    return await db.select().from(contactMessages).orderBy(contactMessages.createdAt);
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const { db } = await import("./db");
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message || undefined;
  }

  // Recommendation engine methods
  async saveUserPreferences(preferences: InsertUserPreferences): Promise<UserPreferences> {
    const { db } = await import("./db");
    const [preference] = await db
      .insert(userPreferences)
      .values(preferences)
      .returning();
    return preference;
  }

  async getUserPreferences(sessionId: string): Promise<UserPreferences | undefined> {
    const { db } = await import("./db");
    const [preference] = await db
      .select()
      .from(userPreferences)
      .where(eq(userPreferences.sessionId, sessionId))
      .orderBy(desc(userPreferences.updatedAt));
    return preference || undefined;
  }

  async updateUserPreferences(sessionId: string, preferences: Partial<InsertUserPreferences>): Promise<UserPreferences> {
    const { db } = await import("./db");
    const [preference] = await db
      .update(userPreferences)
      .set({ ...preferences, updatedAt: new Date() })
      .where(eq(userPreferences.sessionId, sessionId))
      .returning();
    return preference;
  }

  async trackServiceInteraction(interaction: InsertServiceInteraction): Promise<ServiceInteraction> {
    const { db } = await import("./db");
    const [serviceInteraction] = await db
      .insert(serviceInteractions)
      .values(interaction)
      .returning();
    return serviceInteraction;
  }

  async getServiceInteractions(sessionId: string): Promise<ServiceInteraction[]> {
    const { db } = await import("./db");
    return await db
      .select()
      .from(serviceInteractions)
      .where(eq(serviceInteractions.sessionId, sessionId))
      .orderBy(desc(serviceInteractions.createdAt));
  }

  async saveRecommendation(recommendation: InsertRecommendation): Promise<Recommendation> {
    const { db } = await import("./db");
    const [rec] = await db
      .insert(recommendations)
      .values(recommendation)
      .returning();
    return rec;
  }

  async getRecommendations(sessionId: string): Promise<Recommendation[]> {
    const { db } = await import("./db");
    return await db
      .select()
      .from(recommendations)
      .where(eq(recommendations.sessionId, sessionId))
      .orderBy(desc(recommendations.priority), desc(recommendations.confidence));
  }

  async markRecommendationViewed(id: number): Promise<void> {
    const { db } = await import("./db");
    await db
      .update(recommendations)
      .set({ isViewed: true })
      .where(eq(recommendations.id, id));
  }

  async markRecommendationClicked(id: number): Promise<void> {
    const { db } = await import("./db");
    await db
      .update(recommendations)
      .set({ isClicked: true })
      .where(eq(recommendations.id, id));
  }
}

export const storage = new DatabaseStorage();
