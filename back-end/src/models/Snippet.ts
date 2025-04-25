import mongoose, { Schema, Document } from "mongoose";
import { ISnippet } from "./interfaces/snippet.interface.js";

export interface SnippetDocument extends ISnippet, Document {}

const snippetSchema = new Schema<SnippetDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true },
    language: { type: String, required: true },
    technology: { type: String },
    isPublic: { type: Boolean, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

const Snippet = mongoose.model<SnippetDocument>("Snippet", snippetSchema);

export default Snippet;
