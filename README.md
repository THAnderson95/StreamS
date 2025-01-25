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
