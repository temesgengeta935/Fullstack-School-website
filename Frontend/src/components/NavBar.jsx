import React from "react";
import { userRoutes } from "../constants/routes";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Left logo */}
        <div>
          <h2>School Logo</h2>
        </div>
        <ul className={styles.links}>
          {userRoutes.map((route, index) => (
            <li className={styles.link} key={index}>
              {route.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
