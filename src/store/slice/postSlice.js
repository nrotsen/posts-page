import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../../data/api";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: posts,
  },
  reducers: {
    publishPost: (state, action) => {
      state.posts.push({
        id: state.posts[state.posts.length - 1]?.id + 1 || 1,
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        category: action.payload.category,
        date: action.payload.date,
        text: action.payload.text,
      });
    },
  },
});
export const { publishPost } = postSlice.actions;

export default postSlice.reducer;
