import express from "express";
import {
  createSnippet,
  getSnippets,
  getSnippetById,
  updateSnippet,
  deleteSnippet,
} from "../controllers/snippetController.js";
import { protect } from "../middleware/AuthMiddleware.js";
const router = express.Router();
router.route("/").get(getSnippets).post(protect, createSnippet);
router
  .route("/:id")
  .get(getSnippetById)
  .put(protect, updateSnippet)
  .delete(protect, deleteSnippet);
export default router;
