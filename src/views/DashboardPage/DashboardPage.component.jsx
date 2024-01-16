import { NavBar } from "../../components/NavBar/NavBar.component";
import { PostCard } from "../../components/PostCard/PostCard.component";
import { useSelector } from "react-redux";
import styles from "./DashboardPage.module.css";

export const DashboardPage = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className={styles.containerDashboard}>
      <NavBar />
      {posts.map((post) => (
        <div key={post.id} className={styles.containerPostCards}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};
