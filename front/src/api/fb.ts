import axios, { AxiosResponse } from "axios";

import { APIDataCommentResponse } from "@/types/commentApi";
import { CommentDataWithReplies } from "@/types/extendedTypes";
import { FB_API_ENDPOINT_COMMENTS } from "@/constants/";

import { addRepliesToComments } from "@/utils/Transformers";

const getCommentsEndpoint = (videoId: string): string =>
  FB_API_ENDPOINT_COMMENTS.replace("{0}", videoId);

const getRequestHeaders = () => ({
  Authorization: `Bearer ${import.meta.env.VITE_FB_API_ACCESS_TOKEN}`,
});

const getRequestParams = () => ({
  filter: "stream",
  live_filter: "no_filter",
  fields:
    "message,attachment,reactions,like_count,from{id,name,picture},parent,created_time",
});

const fetchComments = async (videoId: string): Promise<AxiosResponse> => {
  const endpoint = getCommentsEndpoint(videoId);
  const headers = getRequestHeaders();
  const params = getRequestParams();
  return axios.get(endpoint, { params, headers });
};

export async function FetchVideoCommentsData(
  videoId: string,
): Promise<Array<CommentDataWithReplies>> {
  if (!videoId) {
    throw new Error(`videoID must not be empty for API call`);
  }

  try {
    const response = await fetchComments(videoId);

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
