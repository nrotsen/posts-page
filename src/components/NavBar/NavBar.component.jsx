import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/Bs";
import { GrUserSettings } from "react-icons/Gr";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.linkItem} to={"/"}>
        <h2 className={styles.brand}>The Controvertial Post</h2>
      </Link>
      <div className={styles.containerOptions}>
        <Link className={styles.linkItem} to={"/createPost"}>
          <div className={styles.createPost}>
            <span>Write</span>
            <BsPencilSquare />
          </div>
        </Link>
        <Link className={styles.linkItem} to={"/dashboard"}>
          <div className={styles.dashboard}>
            <span>Dashboard</span>
            <GrUserSettings />
          </div>
        </Link>
      </div>
    </div>
  );
};
