import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar.component";
import styles from "./PostPage.module.css";

export const PostPage = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post || !post.file) {
    return <p>Post or file not found</p>;
  }

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.containerPost}>
        <div>
          <span>{post.category}</span>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <h2 className={styles.postSubtitle}>{post.subtitle}</h2>
        </div>
        <div className={styles.postDate}>
          <span>{post.date}</span>
        </div>
        <div className={styles.containerPostImg}>
          <img src={post.file} alt="imgPost" />
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
};
