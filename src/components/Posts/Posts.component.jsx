import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Posts.style.css";

export const Posts = ({ id, title, date, category, image }) => {
  return (
    <div className="cards-container">
      <Link className="link-item" to={`/posts/${id}`}>
        <div className="post-container">
          <div className="img-container">
            <img className="image" src={image} />
          </div>
          <span className="category">{category}</span>
          <span className="date">{date}</span>
          <span className="title">{title}</span>
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
  image: PropTypes.string,
};
