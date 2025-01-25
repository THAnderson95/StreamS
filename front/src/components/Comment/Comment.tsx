// import { BookCategory } from "@/types/books";
// import BookList from "@/components/BookList/BookList";
// import { booksAPI } from "@/app/api";
// import { useEffect, useState } from "react";
// import axios, { AxiosResponse } from "axios";

import { CommentData } from "@/types";
// import { FetchProfilePictureUrl } from "@/api";

interface CommentProps {
  data: CommentData;
}

export default function Comment({ data }: CommentProps) {

  // const renderAttachment = () => 
  return (
    <div className="comment-container border flex flex-row p-2 m-2 bg-gray-400">
      <div className="comment-picture">
        <img
          src={data.from.picture.data.url}
          className="comment-profile-image mr-4 rounded-full"
        ></img>
      </div>
      <div className="comment-info">
        <div className="comment-name text-2xl">{data.from.name}</div>
        <div className="comment-message">{data.message}</div>
        <span>likes: {data.like_count}</span>
        {data.reactions && <span><br />HAS REACTIONS</span>}
        {data.attachment && <span><br />HAS ATTACHMENT</span>}
        <br />
        {/* <span>{data.id}</span> */}
      </div>
    </div>
  );
}
