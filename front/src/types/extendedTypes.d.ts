import { CommentData } from "./commentApi";

export interface CommentDataWithReplies extends CommentData {
  replies?: Array<CommentData>;
}
