import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar.component";

import "./PostPage.style.css";

export const PostPage = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="postPage-container">
      <NavBar />
      <div className="post-wrapper">
        <div>
          <span>{post.category}</span>
          <h1 className="post-title">{post.title}</h1>
          <h2 className="sub-title">{post.subtitle}</h2>
        </div>
        <div className="subtitles-container">
          <span>{post.date}</span>
        </div>
        <div className="img-post-wrapper">
          <img className="img-post" src={`/${post.image}`} alt={post.title} />
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
};
