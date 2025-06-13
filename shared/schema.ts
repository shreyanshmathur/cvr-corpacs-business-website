import { pgTable, text, serial, integer, boolean, timestamp, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Keep existing user schema for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// User preferences for recommendation engine
export const userPreferences = pgTable("user_preferences", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  businessType: varchar("business_type", { length: 100 }), // MNC, SME, Startup, Individual
  industry: varchar("industry", { length: 100 }), // IT, Manufacturing, Trading, etc.
  companySize: varchar("company_size", { length: 50 }), // Small, Medium, Large
  primaryConcerns: jsonb("primary_concerns"), // Array of concerns like tax compliance, accounting, etc.
  budget: varchar("budget", { length: 50 }), // Budget range
  urgency: varchar("urgency", { length: 50 }), // High, Medium, Low
  previousServices: jsonb("previous_services"), // Array of previously used services
  location: varchar("location", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Service interactions tracking
export const serviceInteractions = pgTable("service_interactions", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  serviceType: varchar("service_type", { length: 100 }).notNull(), // direct-tax, indirect-tax, etc.
  interactionType: varchar("interaction_type", { length: 50 }).notNull(), // view, click, inquiry
  duration: integer("duration"), // Time spent in seconds
  metadata: jsonb("metadata"), // Additional interaction data
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Generated recommendations
export const recommendations = pgTable("recommendations", {
  id: serial("id").primaryKey(),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  serviceType: varchar("service_type", { length: 100 }).notNull(),
  confidence: integer("confidence").notNull(), // 0-100 confidence score
  reasons: jsonb("reasons").notNull(), // Array of reasons for recommendation
  priority: integer("priority").notNull(), // 1-5 priority level
  metadata: jsonb("metadata"), // Additional recommendation data
  isViewed: boolean("is_viewed").default(false),
  isClicked: boolean("is_clicked").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserPreferencesSchema = createInsertSchema(userPreferences).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertServiceInteractionSchema = createInsertSchema(serviceInteractions).omit({
  id: true,
  createdAt: true,
});

export const insertRecommendationSchema = createInsertSchema(recommendations).omit({
  id: true,
  createdAt: true,
});

export type InsertUserPreferences = z.infer<typeof insertUserPreferencesSchema>;
export type UserPreferences = typeof userPreferences.$inferSelect;
export type InsertServiceInteraction = z.infer<typeof insertServiceInteractionSchema>;
export type ServiceInteraction = typeof serviceInteractions.$inferSelect;
export type InsertRecommendation = z.infer<typeof insertRecommendationSchema>;
export type Recommendation = typeof recommendations.$inferSelect;
