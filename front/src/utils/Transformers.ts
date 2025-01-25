import {
  APIDataCommentResponse,
  CommentData,
  CommentDataWithReplies,
} from "@/types";

export function addRepliesToComments(
  data: APIDataCommentResponse
): Array<CommentDataWithReplies> {
  // filter the comments that are child comments and convert them to `CommentDataWithReplies`
  const filteredComments: Array<CommentDataWithReplies> = data.data
    .filter((comment) => !comment.parent)
    .map((comment) => ({ ...comment, replies: [] }));

  // filter ONLY child replies
  const childReplies: Array<CommentData> = data.data.filter(
    (comment) => comment.parent
  );

  // merge them
  const addRepliesToComments: Array<CommentDataWithReplies> =
    filteredComments.map((parentComment) => {
      parentComment.replies = childReplies.filter(
        (replyComment) => replyComment.parent?.id === parentComment.id
      );
      return parentComment;
    });

  return addRepliesToComments;
}
