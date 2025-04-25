import { Types } from "mongoose";

export interface ISnippet {
  title: string;
  description: string;
  code: string;
  language: string;
  technology: string;
  isPublic: boolean;
  user: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
