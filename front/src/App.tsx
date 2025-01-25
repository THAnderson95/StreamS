import { useEffect, useState } from "react";
// import { APIDataCommentResponse } from "@/types";

import { FetchVideoCommentsData } from "@/api";
import { CommentDataWithReplies } from "./types";
import CommentsContainer from "@/components/CommentsContainer/CommentsContainer";

import "./App.css"
import "./App.css";

const VIDEO_ID = "241540867013420";


function App() {
  const [comments, setComments] = useState<Array<CommentDataWithReplies>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const renderHeader = () => (
    <div className="w-full text-4xl text-center text-white bg-blue-500 py-4 mb-4">
      Facebook Video Comments
    </div>
  );

  useEffect(() => {
    FetchVideoCommentsData(VIDEO_ID)
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      {renderHeader()}
      <div className="content-container mx-auto w-1/2 bg-gray-200">
       <CommentsContainer data={comments} />
      </div>
    </div>
  );
}

export default App;
