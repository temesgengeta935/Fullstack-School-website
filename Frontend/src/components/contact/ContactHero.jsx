import styles from "./ContactHero.module.css";

const ContactHero = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.hero_background}>
        <div className={styles.hero_overlay}></div>
        <img
          src="assets/images/modern-school-science-laboratory.jpg"
          alt="Contact Us"
          className={styles.hero_image}
        />
      </div>

      <div className={styles.hero_content}>
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              <a href={crumb.link}>{crumb.name}</a>
              {index < breadcrumbs.length - 1 && (
                <span className={styles.separator}> / </span>
              )}
            </span>
          ))}
        </div>
        <h1 className={styles.hero_title}>Contact Us</h1>
        <p className={styles.hero_subtitle}>Get in Touch With Our School</p>
      </div>
    </section>
  );
};

export default ContactHero;
