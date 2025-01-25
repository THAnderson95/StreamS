import axios, { AxiosResponse } from "axios";

import { APIDataCommentResponse, CommentData } from "@/types";
import { FB_API_ENDPOINT_COMMENTS } from "@/constants";

export async function FetchVideoComments(
  videoId: string
): Promise<Array<CommentData>> {
  // console.log(import.meta.env.VITE_FB_API_ACCESS_TOKEN);
  try {
    const response: AxiosResponse = await axios.get(
      FB_API_ENDPOINT_COMMENTS.replace("{0}", videoId),
      {
        params: {
          filter: "stream",
          live_filter: "no_filter",
          fields: "message,attachment,reactions,like_count",
        },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_FB_API_ACCESS_TOKEN}`,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`API Error: ${response.status}`);
    }

    const { data } = response as { data: APIDataCommentResponse }; // type cast
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
