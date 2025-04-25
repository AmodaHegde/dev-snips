import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import User, { UserDocument } from "../models/User.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface RegisterRequestBody extends LoginRequestBody {
  username: string;
}

const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || "your_jwt_secret", {
    expiresIn: "30d",
  });
};

export const register = async (
  req: Request<ParamsDictionary, any, RegisterRequestBody>,
  res: Response,
): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create new user
    const user: UserDocument = await User.create({ username, email, password });

    // Generate token
    const token = generateToken(
      (user._id as mongoose.Types.ObjectId).toString(),
    );

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};

export const login = async (
  req: Request<ParamsDictionary, any, LoginRequestBody>,
  res: Response,
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Generate token
    const token = generateToken(
      (user._id as mongoose.Types.ObjectId).toString(),
    );

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    res.status(500).json({ message: "Server error", error: errorMessage });
  }
};
