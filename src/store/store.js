import { configureStore } from "@reduxjs/toolkit";

import posts from "./slice/postSlice";

export default configureStore({
  reducer: {
    posts
  }
});