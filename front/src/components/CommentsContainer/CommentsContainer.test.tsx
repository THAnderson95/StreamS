import { act } from "react";

import { render } from "@testing-library/react";

import CommentsContainer from "./CommentsContainer";
import { generateCommentData } from "@/utils/testUtils";
import { CommentDataWithReplies } from "@/types/extendedTypes";

it("renders correctly and matches snapshot", async () => {
  const commentData: Array<CommentDataWithReplies> = generateCommentData();
  const { asFragment } = render(<CommentsContainer data={commentData} />);

  /* eslint-disable testing-library/no-unnecessary-act */
  await act(async () => {});
  // from the console: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`... but it's importing from react 🤔

  expect(asFragment()).toMatchSnapshot();
});
