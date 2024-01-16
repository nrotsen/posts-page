/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setPreviewPost } from "../../store/slice/postSlice";
import { ImageInput } from "../ImageInput/ImageInput.component";
import styles from "./StyledInput.module.css";

export const StyledInput = ({
  label,
  maxCharacters,
  text,
  type,
  setImgPost,
  setImgPreview,
}) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value =
      type === "date" ? e.target.valueAsDate.toISOString() : e.target.value;

    dispatch(setPreviewPost({ name: e.target.name, value }));
  };

  return (
    <div className={styles.container}>
      <span className={styles.containerLabel}>{label}</span>
      {type === "file" ? (
        <ImageInput
          label={label}
          setImgPost={setImgPost}
          setImgPreview={setImgPreview}
        />
      ) : type === "date" ? (
        <input
          className={styles.containerInput}
          type="date"
          name={label.toLowerCase()}
          onChange={handleInputChange}
        />
      ) : (
        <textarea
          className={styles.containerInput}
          type="text"
          name={label.toLowerCase()}
          onChange={handleInputChange}
        >
          {text}
        </textarea>
      )}
      {type !== "date" && type !== "file" && (
        <span
          className={styles.containerMax}
        >{`${maxCharacters} characters maximum`}</span>
      )}
    </div>
  );
};
