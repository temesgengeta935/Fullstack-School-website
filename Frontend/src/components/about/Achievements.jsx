import styles from "./Achievements.module.css";

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "National Awards",
      items: [
        "Excellence in Education (2023)",
        "Best Infrastructure Award",
        "Innovation in Learning",
      ],
    },
    {
      icon: "🎓",
      title: "Academics",
      items: [
        "100% Board Exam Pass Rate",
        "Average Score: 92%",
        "Merit Scholarships Available",
      ],
    },
    {
      icon: "🌟",
      title: "Recognitions",
      items: [
        "ISO 9001 Certified",
        "NCERT Affiliated",
        "International Partnership",
      ],
    },
  ];

  return (
    <section className={styles.achievements}>
      <div className={styles.container}>
        <h2 className={styles.title}>Achievements & Accreditations</h2>
        <div className={styles.achievements_grid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievement_box}>
              <div className={styles.icon}>{achievement.icon}</div>
              <h3 className={styles.achievement_title}>{achievement.title}</h3>
              <ul className={styles.items_list}>
                {achievement.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className={styles.bullet}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
