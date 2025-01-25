import { CommentData } from "@api/commentApi";

export interface CommentDataWithReplies extends CommentData {
  replies?: Array<CommentData>;
}
