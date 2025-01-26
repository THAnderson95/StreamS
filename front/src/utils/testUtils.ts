import { CommentDataWithReplies } from "@/types/extendedTypes";
import { ATTACHMENT_TYPES } from "@/constants";

function generateCommentWithoutParentsAndReplies(): CommentDataWithReplies {
  return {
    id: "1",
    message: "This is a comment without parents and without replies",
    from: {
      id: "user1",
      name: "User One",
      picture: {
        data: {
          height: 50,
          width: 50,
          is_silhouette: false,
          url: "https://example.com/user1.jpg",
        },
      },
    },
    like_count: 10,
    replies: [],
  };
}

function generateCommentWithParentAndReplies(): CommentDataWithReplies {
  return {
    id: "2",
    message: "This is a comment with a parent and with replies",
    from: {
      id: "user2",
      name: "User Two",
      picture: {
        data: {
          height: 50,
          width: 50,
          is_silhouette: false,
          url: "https://example.com/user2.jpg",
        },
      },
    },
    like_count: 5,
    parent: { id: "1" },
    attachment: undefined,
    reactions: undefined,
    replies: [
      {
        id: "3",
        message: "This is a reply to comment 2",
        from: {
          id: "user3",
          name: "User Three",
          picture: {
            data: {
              height: 50,
              width: 50,
              is_silhouette: false,
              url: "https://example.com/user3.jpg",
            },
          },
        },
        like_count: 2,
        parent: { id: "2" },
      },
    ],
  };
}

function generateCommentWithMultipleReactions(): CommentDataWithReplies {
  return {
    id: "4",
    message: "This is a comment with multiple reactions",
    from: {
      id: "user4",
      name: "User Four",
      picture: {
        data: {
          height: 50,
          width: 50,
          is_silhouette: false,
          url: "https://example.com/user4.jpg",
        },
      },
    },
    like_count: 20,
    reactions: {
      data: [
        { id: "reaction1", name: "User Five", type: "LIKE" },
        { id: "reaction2", name: "User Six", type: "LOVE" },
      ],
      paging: { cursors: { before: "", after: "" } },
    },
    replies: [],
  };
}

function generateCommentWithAttachment(): CommentDataWithReplies {
  return {
    id: "5",
    message: "",
    from: {
      id: "user5",
      name: "User Five",
      picture: {
        data: {
          height: 50,
          width: 50,
          is_silhouette: false,
          url: "https://example.com/user5.jpg",
        },
      },
    },
    like_count: 0,
    attachment: {
      media: {
        image: {
          height: 100,
          src: "https://example.com/attachment.jpg",
          width: 100,
        },
        target: { id: "attachment1", url: "https://example.com/attachment" },
      },
      type: ATTACHMENT_TYPES.PHOTO,
      url: "https://example.com/attachment",
    },
    replies: [],
  };
}

function generateCommentWithOnlyMessage(): CommentDataWithReplies {
  return {
    id: "6",
    message: "This is a comment with only a message",
    from: {
      id: "user6",
      name: "User Six",
      picture: {
        data: {
          height: 50,
          width: 50,
          is_silhouette: false,
          url: "https://example.com/user6.jpg",
        },
      },
    },
    like_count: 0,
    replies: [],
  };
}

export function generateCommentData(): Array<CommentDataWithReplies> {
  return [
    generateCommentWithoutParentsAndReplies(),
    generateCommentWithParentAndReplies(),
    generateCommentWithMultipleReactions(),
    generateCommentWithAttachment(),
    generateCommentWithOnlyMessage(),
  ];
}