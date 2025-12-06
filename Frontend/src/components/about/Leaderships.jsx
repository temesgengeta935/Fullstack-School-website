import styles from "./Leadership.module.css";

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      image: "assets/images/professional-woman-principal-portrait.jpg",
    },
    {
      name: "Mr. Robert Chen",
      role: "Vice Principal - Academics",
      image: "assets/images/professional-man-vice-principal-portrait.jpg",
    },
    {
      name: "Ms. Emily Williams",
      role: "Head of Admissions",
      image: "assets/images/professional-woman-admissions-head-portrait.jpg",
    },
  ];

  return (
    <section className={styles.leadership}>
      <div className={styles.container}>
        <h2 className={styles.title}>School Leadership</h2>
        <p className={styles.subtitle}>
          Meet the dedicated team leading our institution towards excellence
        </p>
        <div className={styles.leaders_grid}>
          {leaders.map((leader, index) => (
            <div key={index} className={styles.leader_card}>
              <div className={styles.image_wrapper}>
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              <h3 className={styles.name}>{leader.name}</h3>
              <p className={styles.role}>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
