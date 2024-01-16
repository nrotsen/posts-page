import { NavBar } from "../../components/NavBar/NavBar.component";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm.component";
import { Preview } from "../../components/Preview/Preview.component";
import { useState } from "react";
import styles from "./CreatePostPage.module.css";

export const CreatePostPage = () => {
  const [imgPost, setImgPost] = useState("");
  const [imgPreview, setImgPreview] = useState("");

  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.containerFormAndPreview}>
        <CreatePostForm
          setImgPost={setImgPost}
          setImgPreview={setImgPreview}
          imgPost={imgPost}
        />

        <Preview image={imgPreview} />
      </div>
    </div>
  );
};
