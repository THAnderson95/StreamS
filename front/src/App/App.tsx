import { useState } from "react";

import { FetchVideoCommentsData } from "@/api";
import { CommentDataWithReplies } from "@/types/extendedTypes";
import CommentsContainer from "@/components/CommentsContainer/CommentsContainer";

import "./App.css";

const VIDEO_ID = "241540867013420";

function App() {
  const [comments, setComments] = useState<Array<CommentDataWithReplies>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchId, setSearchId] = useState<string>(VIDEO_ID);
  const [apiError, setApiError] = useState<string>("");

  const renderHeader = () => (
    <div className="w-full text-4xl text-center text-white bg-blue-500 py-4 mb-4">
      Facebook Video Comments
    </div>
  );

  const renderLoading = () => (
    <div className="loading max-w-xs rounded-2xl mx-auto text-center text-white bg-blue-500 text-2xl p-2">
      Loading...
    </div>
  );

  const renderApiError = () => (
    <div className="w-full text-md rounded-2xl text-center text-white bg-red-700 py-4 mb-4">
      {apiError}
    </div>
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchId(event.target.value);
  };

  const renderSearchInfo = () => (
    <div className="search-container p-2 border-b border-b-2 m-2 flex justify-center items-center ">
      <input
        type="text"
        placeholder="Video ID"
        value={searchId}
        onChange={handleSearchInputChange}
        className="filter-input border rounded ml-2"
      />
      <button
        className="sort-button bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-xl m-2 "
        onClick={handleCommentButtonSubmit}
      >
        Get Video Comments
      </button>
    </div>
  );

  const handleCommentButtonSubmit = async () => {
    setLoading(true);
    setComments([]);
    setApiError("");

    FetchVideoCommentsData(searchId)
      .then((data) => {
        setComments(data);
      })
      .catch((error: Error) => {
        console.error("Error:", error);
        setApiError(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="app">
      {renderHeader()}
      <div className="content-container mx-auto w-full lg:w-1/2">
        {renderSearchInfo()}
        {loading && renderLoading()}
        {apiError && !loading && renderApiError()}
        {comments.length > 0 && <CommentsContainer data={comments} />}
      </div>
    </div>
  );
}

export default App;
