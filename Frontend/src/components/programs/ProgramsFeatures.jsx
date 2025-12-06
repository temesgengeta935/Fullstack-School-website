import styles from "./ProgramsFeatures.module.css";

const ProgramsFeatures = () => {
  const features = [
    {
      title: "Expert Faculty",
      description:
        "Highly qualified teachers with advanced degrees and years of teaching experience in their respective fields.",
      icon: "👨‍🏫",
    },
    {
      title: "Modern Facilities",
      description:
        "State-of-the-art science labs, computer labs, library, and recreational facilities for comprehensive learning.",
      icon: "🏫",
    },
    {
      title: "Personalized Learning",
      description:
        "Small class sizes and individual attention to help each student reach their full potential.",
      icon: "📖",
    },
    {
      title: "Global Curriculum",
      description:
        "International standards combined with local context to prepare students for global citizenship.",
      icon: "🌍",
    },
  ];

  return (
    <section className={styles.features_section}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Why Choose Our Programs?</h2>
        <div className={styles.features_grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature_card}>
              <div className={styles.feature_icon}>{feature.icon}</div>
              <h3 className={styles.feature_title}>{feature.title}</h3>
              <p className={styles.feature_description}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsFeatures;
