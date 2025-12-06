import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRoutes } from "../../constants/routes";
import styles from "./NavBar.module.css";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [mobileOpen, setMobileOpen] = useState(false);

  // //when scroll down: hide the navbar, when scroll up: show the navbar
  // const [showNav, setShowNav] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setShowNav(false);
  //     } else {
  //       setShowNav(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);
  // top: showNav ? "0" : "-80px";
  return (
    <nav className={styles.nav} style={{}}>
      <div className={styles.container}>
        {/* Logo + School Name */}
        <div className={styles.leftSection} onClick={() => navigate("/")}>
          <img
            src="/assets/images/logo.avif"
            className={styles.image}
            alt="logo"
          />
          <h1 className={styles.schoolName}>Basius School of Business</h1>
        </div>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {userRoutes.map((item) => {
            if (!item.showInMenu) return null;
            return (
              <li
                key={item.name}
                className={`${styles.list} ${
                  currentPath === item.path ? styles.active : ""
                }`}
              >
                <Link to={item.path} className={styles.link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {userRoutes.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
