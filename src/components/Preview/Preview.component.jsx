/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./Preview.module.css";

export const Preview = ({ image }) => {
  const { previewPost } = useSelector((state) => state.posts);

  if (!previewPost) {
    // Manejar el caso en que previewPost no está definido
    return <div>No hay datos de vista previa disponibles.</div>;
  }

  const stringToDate = (str) => {
    if (!str) return "";
    const dateValue = new Date(str);
    dateValue.setDate(dateValue.getDate() + 1);
    return dateValue.toDateString();
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerButtonsPreview}>
        <button>Mobile</button>
        <button>Desktop</button>
      </div>
      {previewPost && (
        <div className={styles.containerPreview}>
          <div>
            <span>{previewPost.category}</span>
            <h1 className={styles.postTitle}>{previewPost.title}</h1>
            <h2 className={styles.subtitle}>{previewPost.subtitle}</h2>
          </div>
          <div className={styles.containerSubs}>
            <span>{stringToDate(previewPost.date)}</span>
          </div>
          <div className={styles.containerImg}>
            <img className={styles.img} src={image} />
          </div>
          <span>{previewPost.primary}</span>
          <div className={styles.bodyTexts}>
            <span>{previewPost.secondary}</span>
          </div>
        </div>
      )}
    </div>
  );
};
