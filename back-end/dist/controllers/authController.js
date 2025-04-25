import User from "../models/User.js";
import jwt from "jsonwebtoken";
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || "your_jwt_secret", {
    expiresIn: "30d",
  });
};
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    // Create new user
    const user = await User.create({ username, email, password });
    // Generate token
    const token = generateToken(user._id.toString());
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const login = async (req, res) => {
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
    const token = generateToken(user._id.toString());
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
