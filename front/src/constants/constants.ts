export const FB_API_ENDPOINT_COMMENTS = `api/{0}/comments`;

//https://developers.facebook.com/docs/graph-api/reference/story-attachment/
export enum ATTACHMENT_TYPES {
  PHOTO = "photo",
  STICKER = "sticker",
  ANIMATED_IMAGE_VIDEO = "animated_image_video_autoplay",
}

//https://developers.facebook.com/docs/graph-api/reference/v22.0/object/reactions
export enum REACTION_TYPES {
  LIKE = "LIKE",
  LOVE = "LOVE",
  HAHA = "HAHA",
  WOW = "WOW",
  SAD = "SAD",
  ANGRY = "ANGRY",
  CARE = "CARE",
}

export const REACTION_TYPE_SYMBOLS: Record<REACTION_TYPES, string> = {
  [REACTION_TYPES.LIKE]: "👍",
  [REACTION_TYPES.LOVE]: "❤️",
  [REACTION_TYPES.HAHA]: "😂",
  [REACTION_TYPES.WOW]: "😮",
  [REACTION_TYPES.SAD]: "😢",
  [REACTION_TYPES.ANGRY]: "😡",
  [REACTION_TYPES.CARE]: "🤗",
};
