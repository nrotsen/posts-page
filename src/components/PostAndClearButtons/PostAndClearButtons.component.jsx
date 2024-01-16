/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { publishPost } from "../../store/slice/postSlice";
import styles from "./PostAndClearButtons.module.css";

export const PostAndClearButtons = ({ imgPost }) => {
  const dispatch = useDispatch();
  const previewPost = useSelector((state) => state.posts.previewPost);

  const handlePostData = async () => {
    try {
      if (previewPost) {
        const imgData = new FormData();
        imgData.append("file", imgPost);
        imgData.append("upload_preset", "af9jyzj5");

        const res = await Axios.post(
          "https://api.cloudinary.com/v1_1/ddqorkc6x/image/upload",
          imgData
        );
        dispatch(publishPost({ ...previewPost, file: res.data.url }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePostData}>Post</button>
      <button>Clear all</button>
    </div>
  );
};
