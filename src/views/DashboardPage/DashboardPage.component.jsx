import { NavBar } from "../../components/NavBar/NavBar.component";
import { PostCard } from "../../components/PostCard/PostCard.component";

import "./DashboardPage.style.css";
import { useSelector } from "react-redux";

export const DashboardPage = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="dashboardContainer">
      <NavBar />
      {posts.map((post) => (
        <div key={post.id} className="posts-cards-container">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};
