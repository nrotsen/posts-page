import { useSelector } from "react-redux";
import { Posts } from "../../components/Posts/Posts.component";
import { NavBar } from "../../components/NavBar/NavBar.component";

import "./Home.style.css";

export const Home = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="homePage-container">
      <NavBar />
      <div className="home-container">
        <h1 className="home-title">Recent Posts</h1>
        <div className="posts-container">
          {posts.map((post) => (
            <div className="post-item" key={post.id}>
              <Posts {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
