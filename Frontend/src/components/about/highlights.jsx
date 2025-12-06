import styles from "./highlights.module.css";

const Highlights = () => {
  const stats = [
    { number: "2,500+", label: "Students Enrolled" },
    { number: "150+", label: "Expert Faculty" },
    { number: "38", label: "Years Excellence" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <h2 className={styles.title}>School Highlights</h2>
        <div className={styles.stats_grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat_box}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
