/* eslint-disable react/prop-types */
import styles from "./ImageInput.module.css";

export const ImageInput = ({ label, setImgPost, setImgPreview }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setImgPreview(URL.createObjectURL(file));
    setImgPost(file);
  };

  return (
    <form method="POST" action="/upload" encType="multipart/form-data">
      <input
        className={styles.containerInput}
        name={label}
        type="file"
        onChange={handleFileChange}
      />
    </form>
  );
};
