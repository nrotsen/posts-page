import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../../data/api";
import { FORM_DATA } from "../../utils/formData";

const formatFormData = () => {
  const arrayFormatted = FORM_DATA.map((input) => {
    return {
      [input.label.toLowerCase()]: "",
    };
  });

  return Object.assign({}, ...arrayFormatted);
};

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: posts,
    previewPost: formatFormData(),
  },
  reducers: {
    publishPost: (state, action) => {
      console.log(action.payload, "Payload recibido en publishPost");
      const stringToDate = (str) => {
        if (!str) return "";
        const dateValue = new Date(str);
        dateValue.setDate(dateValue.getDate() + 1);
        return dateValue.toDateString();
      };

      if (action.payload && action.payload.file) {
        console.log("entroooo");
        state.posts.push({
          id: state.posts[state.posts.length - 1]?.id + 1 || 1,
          title: action.payload.title,
          subtitle: action.payload.subtitle,
          category: action.payload.category,
          date: stringToDate(action.payload.date),
          file: action.payload.file,
          text: action.payload.text,
        });
      }
    },
    setPreviewPost: (state, action) => {
      const { name, value } = action.payload;

      state.previewPost = { ...state.previewPost, [name]: value };
    },
  },
});
export const { publishPost, setPreviewPost } = postSlice.actions;

export default postSlice.reducer;
