import { FacebookIcon, Linkedin, MailIcon, Twitter } from "lucide-react";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LEFT SECTION */}
        <div className={styles.leftSection}>
          <img
            src="/assets/images/logo.avif"
            alt="logo"
            className={styles.logo}
          />

          <div className={styles.contactItem}>
            <MailIcon size={20} />
            <span>info@fullstackschool.com</span>
          </div>

          <div className={styles.contactItem}>
            <span>Phone: +123 456 7890</span>
          </div>

          <div className={styles.contactItem}>
            <span>123 Main St, Anytown, USA</span>
          </div>
        </div>

        {/* NAV LINKS 1 */}
        <div className={styles.linkSection}>
          <h3>Home</h3>
          <a href="#">Benefits</a>
          <a href="#">Courses</a>
          <a href="#">Events</a>
          <a href="#">Testimonials</a>
        </div>

        {/* NAV LINKS 2 */}
        <div className={styles.linkSection}>
          <h3>About Us</h3>
          <a href="#">Our Story</a>
          <a href="#">Mission & Vision</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
        </div>

        {/* SOCIAL */}
        <div className={styles.linkSection}>
          <h3>Social Profiles</h3>
          <div className={styles.socialIcons}>
            <FacebookIcon size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>

      <div className={styles.bottomText}>
        <p>
          &copy; {new Date().getFullYear()} Basius School of Business. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
