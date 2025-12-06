import styles from "./Facilities.module.css";

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Laboratory",
      description: "State-of-the-art science and computer labs",
      image: "assets/images/modern-school-science-laboratory.jpg",
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities",
      image: "assets/images/school-sports-complex-gymnasium.jpg",
    },
    {
      title: "Library",
      description: "Digital and traditional learning resources",
      image: "assets/images/modern-school-library-reading-area.jpg",
    },
    {
      title: "Auditorium",
      description: "Multipurpose hall for events and performances",
      image: "assets/images/school-auditorium-performance-venue.jpg",
    },
  ];

  return (
    <section className={styles.facilities}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Facilities</h2>
        <p className={styles.subtitle}>
          World-class infrastructure supporting holistic student development
        </p>
        <div className={styles.facilities_grid}>
          {facilities.map((facility, index) => (
            <div key={index} className={styles.facility_item}>
              <div className={styles.image_container}>
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className={styles.image}
                />
                <div className={styles.image_overlay}></div>
              </div>
              <h3 className={styles.facility_title}>{facility.title}</h3>
              <p className={styles.facility_desc}>{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
