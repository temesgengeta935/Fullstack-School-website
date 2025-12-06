import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Join Our Community?</h2>
        <p className={styles.description}>
          Take the first step towards an exceptional educational journey with us
        </p>
        <div className={styles.button_group}>
          <button className={styles.btn_primary}>Apply Now</button>
          <button className={styles.btn_secondary}>Schedule a Tour</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
