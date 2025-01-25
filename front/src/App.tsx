import { useEffect, useState } from "react";
// import { APIDataCommentResponse } from "@/types";

import "./App.css";
import { FetchVideoComments } from "@/api";

const VIDEO_ID = "241540867013420";
function App() {
  // const [commentData, setCommentData] = useState<
  //   APIDataCommentResponse | undefined
  // >();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    FetchVideoComments(VIDEO_ID)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>New Page LETS GO</div>;
}

export default App;
