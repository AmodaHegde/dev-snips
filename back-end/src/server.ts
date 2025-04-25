import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import snippetRoutes from "./routes/snippetRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "5000");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/snippets", snippetRoutes);
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
