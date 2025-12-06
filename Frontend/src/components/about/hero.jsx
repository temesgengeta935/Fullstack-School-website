import styles from "./Hero.module.css";

const AboutHero = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.hero_background}>
        <div className={styles.hero_overlay}></div>
        <img
          src="assets/images/modern-school-campus-building-with-students.jpg"
          alt="School Campus"
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
        <h1 className={styles.hero_title}>About Our School</h1>
        <p className={styles.hero_subtitle}>
          Excellence in Education Since 1985
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
