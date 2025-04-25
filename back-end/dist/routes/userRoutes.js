import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  getUserSnippets,
} from "../controllers/userController.js";
import { protect } from "../middleware/AuthMiddleware.js";
const router = express.Router();
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.get("/snippets", protect, getUserSnippets);
export default router;
