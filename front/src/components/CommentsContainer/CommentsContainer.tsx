import { CommentData } from "@/types";

import Comment from "@/components/Comment/Comment";

interface CommentContainerProps {
  data: Array<CommentData>;
}

export default function CommentsContainer({ data }: CommentContainerProps) {
  return (
    <div className="comments-container flex flex-col">
      {data.length > 0 && data.map((comment) => <Comment data={comment} />)}
    </div>
  );
}
