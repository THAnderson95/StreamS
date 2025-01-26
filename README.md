# Facebook Comment Information Displaying Technical Test

This is a simple front-end built using [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [tailwindcss](https://tailwindcss.com/).

The aim of this solution is to fetch a list of comments from [Facebook's Graph API](https://developers.facebook.com/docs/graph-api/reference/live-video/comments/#Reading) for a video, and display them on the page.

There is a searchbox for fetching a specific video's comments (originally populated with the video ID defined in the test documentation.)

## How to Setup

Click [here](./front/README.md) for the front-end `README`

### Development Checklist

- [x] Display Post's Comments
- [x] Display Profile Picture for each comment
- [x] Display reply threads for comments
- [x] Display posts with pictures / stickers / gifs
- [ ] Display post reactions
- [ ] Make it look nice
- [ ] Add Mobile Layout
- [ ] Add JEST Unit test & Snapshot tests

### Thoughts while developing
+ Originally was going to create a `childComments` component, but realized i could just recursively render `Comment` as they all have the same layout.
+ Recently learnt a bit about `Tailwindcss`, so I used that for styling in the solution.
+ I was originally trying to do another API call for each individual profile picture, but then i found out that i can specify [any of these specific fields](https://developers.facebook.com/docs/graph-api/reference/comment/) for comments to be returned with the data.

### Potential improvements for the future
+ Could potentially move to `Redux`, if more state management is required instead of a single API call to return info
+ Could add option to auto-expand comments based on the first parent Comment rendered? (I.E. if a `commentsExpanded` prop doesn't exist, set it for child props).
