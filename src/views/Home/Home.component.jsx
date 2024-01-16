import { useSelector } from "react-redux";
import { Posts } from "../../components/Posts/Posts.component";
import { NavBar } from "../../components/NavBar/NavBar.component";

import styles from "./Home.module.css";

export const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className={styles.container}>
      <NavBar />

      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.containerPosts}>
        {posts.map((post) => (
          <div key={post.id}>
            <Posts {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};
