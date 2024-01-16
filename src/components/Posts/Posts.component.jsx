import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Posts.module.css";

export const Posts = ({ id, title, date, category, file }) => {
  return (
    <div className={styles.containerCards}>
      <Link className={styles.linkItem} to={`/posts/${id}`}>
        <div className={styles.containerPost}>
          <div className={styles.containerImg}>
            <img className={styles.img} src={file} />
          </div>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.title}>{title}</span>
        </div>
      </Link>
    </div>
  );
};

Posts.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  file: PropTypes.string,
};
