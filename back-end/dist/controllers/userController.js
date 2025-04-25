import User from "../models/User.js";
import Snippet from "../models/Snippet.js";
// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Get user snippets
export const getUserSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find({ user: req.user?._id }).sort({
      createdAt: -1,
    });
    res.json(snippets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
