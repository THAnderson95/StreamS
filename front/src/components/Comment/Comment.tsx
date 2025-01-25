// import { BookCategory } from "@/types/books";
// import BookList from "@/components/BookList/BookList";
// import { booksAPI } from "@/app/api";
// import { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";

import { useState } from "react";
import { COMMENT_TYPES } from "@/constants";
import { CommentDataWithReplies } from "@/types";

interface CommentProps {
  data: CommentDataWithReplies;
}

export default function Comment({ data }: CommentProps) {
  const [collapseReplies, setCollapseReplies] = useState<boolean>(false);

  const renderAttachment = () => {
    if (data.attachment?.type === COMMENT_TYPES.ANIMATED_IMAGE_VIDEO) {
      return (
        <video
          src={data.attachment?.media.source}
          className="p-2"
          autoPlay
          muted
          loop
        />
      );
    }

    return <img src={data.attachment?.media.image.src} className="p-2 " />;
  };

  return (
    <div className="comment-container border flex flex-row p-2 m-2 bg-gray-400">
      <div className="comment-picture">
        <img
          src={data.from.picture.data.url}
          className="comment-profile-image mr-4 rounded-full"
        ></img>
      </div>
      <div className="comment-info flex-1">
        <div className="comment-name text-2xl">{data.from.name}</div>
        <div className="comment-message">{data.message}</div>

        {data.attachment && (
          <div className="comment-attachment">{renderAttachment()}</div>
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
          data.replies?.map((item) => <Comment key={item.id} data={item} />)}
      </div>
    </div>
  );
}
