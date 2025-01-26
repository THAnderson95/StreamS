import { act } from "react"; // This should be from 'react' now
import { render } from "@testing-library/react";

import Comment from "./Comment";
import { CommentDataWithReplies } from "@/types/extendedTypes";
import { generateCommentData } from "@/utils/testUtils";

it("renders correctly and matches snapshot", async () => {
  const commentData: CommentDataWithReplies = generateCommentData()[0];
  const { asFragment } = render(
    <Comment key={commentData.id} data={commentData} />,
  );

  /* eslint-disable testing-library/no-unnecessary-act */
  await act(async () => {});

  expect(asFragment()).toMatchSnapshot();
});
