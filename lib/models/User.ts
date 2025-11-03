/**
 * 👤 User Model (Mongoose + TypeScript)
 */
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    image: String,
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
