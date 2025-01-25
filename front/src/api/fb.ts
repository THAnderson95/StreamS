import axios, { AxiosResponse } from "axios";

import { APIDataCommentResponse, CommentDataWithReplies } from "@/types";
import { FB_API_ENDPOINT_COMMENTS } from "@/constants";
import { addRepliesToComments } from "@/utils/Transformers";

export async function FetchVideoCommentsData(
  videoId: string
): Promise<Array<CommentDataWithReplies>> {
  if (!videoId) {
    throw new Error(`videoID must not be empty for API call`);
  }
  try {
    const response: AxiosResponse = await axios.get(
      FB_API_ENDPOINT_COMMENTS.replace("{0}", videoId),
      {
        params: {
          filter: "stream",
          live_filter: "no_filter",
          fields:
            "message,attachment,reactions,like_count,from{id,name,picture},parent,created_time",
        },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_FB_API_ACCESS_TOKEN}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`API Error: ${response.status}`);
    }

    const { data } = response as { data: APIDataCommentResponse }; // typecast
    return addRepliesToComments(data);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
