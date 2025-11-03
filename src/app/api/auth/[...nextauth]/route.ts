/**
 * ✅ NextAuth Setup (Google OAuth + JWT + Session)
 * Works with App Router (Next.js 13+)
 * Features:
 * - Google OAuth login
 * - Auto user creation in MongoDB
 * - JWT and session both store user info
 * - Reconnects DB on each call safely
 */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import envConfig from "@/config/config";
import { connectDB } from "../../../../../lib/db";
import { User } from "../../../../../lib/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: envConfig.google.google_client_id,
      clientSecret: envConfig.google.google_secret__id,
    }),
  ],

  session: {
    strategy: "jwt", // Store JWT in session cookies
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    /**
     * 🧩 1. JWT Callback
     * Runs whenever a JWT is created or updated.
     * Adds custom user info into the token.
     */
    async jwt({ token, user }) {
      await connectDB();

      // If user just signed in
      if (user) {
        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          existingUser = await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }

        // Attach MongoDB _id and user info to token
        token.id = existingUser._id.toString();
        token.name = existingUser.name;
        token.email = existingUser.email;
        token.image = existingUser.image;
      }

      return token;
    },

    /**
     * 🧩 2. Session Callback
     * Runs when session is checked on client or server.
     * Copies token info to session.user for frontend usage.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
      }
      return session;
    },
  },


  secret: envConfig.secrets.next_secrets, // store safely in .env
});

export { handler as GET, handler as POST };
