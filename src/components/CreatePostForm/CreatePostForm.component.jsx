/* eslint-disable react/prop-types */
import { DropInput } from "../DropInput/DropInput.component";
import { FORM_DATA_SECTIONS } from "../../utils/formData";
import { PostAndClearButtons } from "../PostAndClearButtons/PostAndClearButtons.component";
import styles from "./CreatePostForm.module.css";

export const CreatePostForm = ({ setImgPost, imgPost, setImgPreview }) => {
  return (
    <div className={styles.container}>
      <PostAndClearButtons imgPost={imgPost} />

      {FORM_DATA_SECTIONS.map((section, index) => (
        <DropInput
          key={index}
          title={section.title}
          icon={section.icon}
          setImgPost={setImgPost}
          setImgPreview={setImgPreview}
          imgPost={imgPost}
        />
      ))}
    </div>
  );
};
