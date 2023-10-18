import PropTypes from "prop-types";

import "./PostCard.style.css";

export const PostCard = ({ id, title, date, category, image }) => {
  return (
    <div className="card">
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
            <td className="card-img-container">
              <img className="card-img" src={`/${image}`} alt="td-image" />
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
