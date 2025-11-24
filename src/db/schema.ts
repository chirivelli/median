import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

// helpers
const timestamps = {
  updatedAt: timestamp('updated_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
}

// users
export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull().unique(),
  username: varchar('username').notNull().unique(),
  ...timestamps,
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect
