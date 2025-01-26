import { ATTACHMENT_TYPES } from "@/constants";

export interface APIDataCommentResponse {
  data: Array<CommentData>;
  paging: Paging;
}

interface CommentData {
  message: string;
  from: FromData;
  reactions?: Reactions;
  attachment?: Attachment;
  id: string;
  like_count: number;
  parent: Parent;
}

interface Parent {
  id: string;
}

interface FromData {
  id: string;
  name: string;
  picture: Picture;
}

interface Picture {
  data: PictureData;
}

interface PictureData {
  height: number;
  width: number;
  is_silhouette: boolean;
  url: string;
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
    source?: string;
  };
  type: ATTACHMENT_TYPES;
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
