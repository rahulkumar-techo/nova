/**
 * ⚙️ MongoDB Connection Utility (Mongoose)
 */
import envConfig from "@/config/config";
import mongoose from "mongoose";

const MONGODB_URI = envConfig.mongo.url||"";

if (!MONGODB_URI) throw new Error("❌ MONGODB_URI not found in .env.local");

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
