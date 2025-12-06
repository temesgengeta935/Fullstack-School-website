import styles from "./MissionVision.module.css";

const MissionVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon_box}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={styles.icon}
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
            </div>
            <h3 className={styles.card_title}>Our Mission</h3>
            <p className={styles.card_text}>
              To empower students with academic excellence, critical thinking
              skills, and moral values that prepare them to become responsible
              global citizens and leaders in their chosen fields.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon_box}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={styles.icon}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
              </svg>
            </div>
            <h3 className={styles.card_title}>Our Vision</h3>
            <p className={styles.card_text}>
              To create an inclusive learning environment where every student
              realizes their full potential, fostering innovation, creativity,
              and a lifelong passion for learning.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon_box}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className={styles.icon}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
              </svg>
            </div>
            <h3 className={styles.card_title}>Our Values</h3>
            <p className={styles.card_text}>
              Integrity, Excellence, Respect, Responsibility, and Community. We
              believe in developing well-rounded individuals who contribute
              positively to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
