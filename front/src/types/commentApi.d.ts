export interface APIDataCommentResponse {
  data: Array<CommentData>;
  paging: Paging;
}

interface CommentData {
  message: string;
  reactions?: Reactions;
  attachment?: Attachment;
  id: string;
  like_count: number;
}

interface Attachment {
  media: {
    image: {
      height: number;
      src: string;
      width: number;
    };
    target: {
      id: string;
      url: string;
    };
  };
  type: string;
  url: string;
}

interface Reactions {
  data: Array<Reaction>;
  paging: Paging;
}

interface Reaction {
  id: string;
  name: string;
  type: string;
  paging: Paging;
}

interface Paging {
  cursors: {
    before: string;
    after: string;
  };
}
