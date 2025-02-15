import { CommentData } from "@/types/commentApi";
import Comment from "@/components/Comment/Comment";

interface CommentContainerProps {
  data: Array<CommentData>;
}

export default function CommentsContainer({ data }: CommentContainerProps) {
  return (
    <div className="comments-container flex flex-col">
      {!data || data.length === 0
        ? "No comments available"
        : data.map((comment) => <Comment key={comment.id} data={comment} />)}
    </div>
  );
}
