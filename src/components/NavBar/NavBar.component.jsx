import { Link } from "react-router-dom";
import "./NavBar.style.css";
import { BsPencilSquare } from "react-icons/Bs";
import { GrUserSettings } from "react-icons/Gr";

export const NavBar = () => {
  return (
    <div className="navBar">
      <Link className="link-item" to={"/"}>
        <h2 className="brand">The Controvertial Post</h2>
      </Link>
      <div className="options">
        <Link className="link-item" to={"/createPost"}>
          <div className="create-post">
            <span>Write</span>
            <BsPencilSquare />
          </div>
        </Link>
        <Link className="link-item" to={"/dashboard"}>
          <div className="dashboard">
            <span>Dashboard</span>
            <GrUserSettings />
          </div>
        </Link>
      </div>
    </div>
  );
};
