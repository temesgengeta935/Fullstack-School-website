import styles from "./ProgramsGrid.module.css";

const ProgramsGrid = () => {
  const programs = [
    {
      id: 1,
      title: "Primary Education",
      subtitle: "Grades 1-5",
      description:
        "Foundational learning with focus on literacy, numeracy, and basic sciences. Building curiosity and love for learning.",
      icon: "📚",
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Secondary Education",
      subtitle: "Grades 6-8",
      description:
        "Intermediate curriculum with enhanced sciences, mathematics, and humanities. Developing critical thinking skills.",
      icon: "🔬",
      color: "#8B5CF6",
    },
    {
      id: 3,
      title: "High School",
      subtitle: "Grades 9-12",
      description:
        "Advanced academics with specialized streams: Science, Commerce, and Humanities. College preparation.",
      icon: "🎓",
      color: "#EC4899",
    },
    {
      id: 4,
      title: "STEM Program",
      subtitle: "Specialized Track",
      description:
        "Advanced Science, Technology, Engineering, and Mathematics curriculum with hands-on projects and lab work.",
      icon: "⚡",
      color: "#F59E0B",
    },
    {
      id: 5,
      title: "Arts & Humanities",
      subtitle: "Specialized Track",
      description:
        "Literature, History, Geography, and Social Sciences with emphasis on critical analysis and cultural understanding.",
      icon: "🎭",
      color: "#10B981",
    },
    {
      id: 6,
      title: "Sports & Athletics",
      subtitle: "Co-curricular",
      description:
        "Comprehensive sports program including cricket, football, basketball, volleyball, athletics, and gymnastics.",
      icon: "⚽",
      color: "#06B6D4",
    },
  ];

  return (
    <section className={styles.programs_section}>
      <div className={styles.container}>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>Featured Programs</h2>
          <p className={styles.section_description}>
            Explore our diverse range of academic and co-curricular programs
            designed to nurture every student's potential.
          </p>
        </div>

        <div className={styles.programs_grid}>
          {programs.map((program) => (
            <div key={program.id} className={styles.program_card}>
              <div
                className={styles.card_icon}
                style={{ backgroundColor: `${program.color}15` }}
              >
                <span className={styles.icon_emoji}>{program.icon}</span>
              </div>
              <h3 className={styles.program_title}>{program.title}</h3>
              <p className={styles.program_subtitle}>{program.subtitle}</p>
              <p className={styles.program_description}>
                {program.description}
              </p>
              <button
                className={styles.card_button}
                style={{ borderColor: program.color, color: program.color }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
