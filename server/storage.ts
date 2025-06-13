import { contactMessages, type ContactMessage, type InsertContactMessage, users, type User, type InsertUser } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods for compatibility
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
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
}

export const storage = new DatabaseStorage();
