import PropTypes from "prop-types";

import styles from "./PostCard.module.css";

export const PostCard = ({ id, title, date, category, image }) => {
  return (
    <div className={styles.card}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td className={styles.cardImgContainer}>
              <img
                className={styles.cardImg}
                src={`/${image}`}
                alt="td-image"
              />
            </td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
};
