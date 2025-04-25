import Snippet from "../models/Snippet.js";
import mongoose from "mongoose";
// Create snippet
export const createSnippet = async (req, res) => {
  try {
    const { title, description, code, language, technology, isPublic } =
      req.body;
    const _id = new mongoose.Types.ObjectId();
    const newSnippet = await Snippet.create({
      _id,
      title,
      description,
      code,
      language,
      technology,
      isPublic,
      user: req.user?._id,
    });
    res.status(201).json(newSnippet);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Get all snippets
export const getSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find({ isPublic: true })
      .sort({ createdAt: -1 })
      .populate("user", "username profilePicture");
    res.json(snippets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Get snippet by ID
export const getSnippetById = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id).populate(
      "user",
      "username profilePicture",
    );
    if (!snippet) {
      res.status(404).json({ message: "Snippet not found" });
      return;
    }
    res.json(snippet);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Update snippet
export const updateSnippet = async (req, res) => {
  try {
    const { title, description, code, language, technology, isPublic } =
      req.body;
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) {
      res.status(404).json({ message: "Snippet not found" });
      return;
    }
    if (!req.user) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }
    // Check if user owns the snippet
    if (snippet.user.toString() !== req.user._id.toString()) {
      res.status(401).json({ message: "User not authorized" });
      return;
    }
    snippet.title = title || snippet.title;
    snippet.description = description || snippet.description;
    snippet.code = code || snippet.code;
    snippet.language = language || snippet.language;
    snippet.technology =
      technology !== undefined ? technology : snippet.technology;
    snippet.isPublic = isPublic !== undefined ? isPublic : snippet.isPublic;
    const updatedSnippet = await snippet.save();
    res.json(updatedSnippet);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Delete snippet
export const deleteSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) {
      res.status(404).json({ message: "Snippet not found" });
      return;
    }
    if (!req.user) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }
    // Check if user owns the snippet
    if (snippet.user.toString() !== req.user._id.toString()) {
      res.status(401).json({ message: "User not authorized" });
      return;
    }
    await snippet.deleteOne();
    res.json({ message: "Snippet removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
