import { useState } from "react";
import { ATTACHMENT_TYPES } from "@/constants";
import { Attachment, Reaction } from "@/types/commentApi";
import { CommentDataWithReplies } from "@/types/extendedTypes";
import { getReactionSymbol } from "@/utils/utils";

interface CommentProps {
  data: CommentDataWithReplies;
}

export default function Comment({ data }: CommentProps) {
  const [collapseReplies, setCollapseReplies] = useState<boolean>(false);

  const renderAttachment = (attachment: Attachment) => {
    if (!attachment) {
      return null;
    }

    if (attachment.type === ATTACHMENT_TYPES.ANIMATED_IMAGE_VIDEO) {
      return (
        <video
          src={attachment.media.source}
          className="attachment-animated-image p-2 rounded-xl"
          autoPlay
          muted
          loop
        />
      );
    }

    if (attachment.type === ATTACHMENT_TYPES.STICKER) {
      return (
        <img
          src={attachment.media.image.src}
          className="attachment-sticker p-2 w-1/4"
        />
      );
    }

    if (attachment.type === ATTACHMENT_TYPES.PHOTO) {
      return (
        <img
          src={attachment.media.image.src}
          className="attachment-photo p-2"
        />
      );
    }

    return (
      <div className="invalid-attachment-type text-red-700 bg-white-200">
        Invalid Attachment Type
      </div>
    );
  };

  const renderReactions = (reactions: Array<Reaction>) => {
    return (
      <div className="comment-reactions flex flex-row">
        {reactions.map((reaction) => (
          <div key={reaction.name} className="reaction text-white  p-1 bg-gray-500 m-1 rounded-full w-auto min-w-1 h-8 flex items-center justify-center">
            {getReactionSymbol(reaction.type)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="comment-container border border-2 flex flex-row p-2 m-2 bg-gray-300 rounded-2xl">
      <div className="comment-picture">
        <img
          src={data.from.picture.data.url}
          className="comment-profile-image mr-4 rounded-full max-w-50 max-h-50"
        ></img>
      </div>
      <div className="comment-info flex-1">
        <div className="content-container bg-gray-200 rounded-lg m-2 p-2">
          <div className="comment-name font-bold text-lg">{data.from.name}</div>
          <div className="comment-message">{data.message}</div>

          {data.attachment && (
            <div className="comment-attachment">
              {renderAttachment(data.attachment)}
            </div>
          )}
        </div>

        {data.reactions && (
          <div className="comment-reactions">
            {renderReactions(data.reactions.data)}
          </div>
        )}
        {data.replies && data.replies.length > 0 && (
          <button
            className="show-button bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 m-1 rounded"
            onClick={() => setCollapseReplies(!collapseReplies)}
          >
            {collapseReplies ? "Hide Replies..." : "Show Replies..."}
          </button>
        )}
        {collapseReplies &&
          data.replies?.map((reply) => <Comment key={reply.id} data={reply} />)}
      </div>
    </div>
  );
}
