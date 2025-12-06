import styles from "./ProgramsHero.module.css";

const ProgramsHero = () => {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Programs", link: "/programs" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.hero_background}>
        <div className={styles.hero_overlay}></div>
        <img
          src="assets/images/modern-school-library-reading-area.jpg"
          alt="School Programs"
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
        <h1 className={styles.hero_title}>Our Academic Programs</h1>
        <p className={styles.hero_subtitle}>
          Comprehensive Learning Across All Disciplines
        </p>
      </div>
    </section>
  );
};

export default ProgramsHero;
