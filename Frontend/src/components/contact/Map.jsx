import styles from "./Map.module.css";

const Map = () => {
  return (
    <section className={styles.map_section}>
      <h2 className={styles.map_title}>Find Us On The Map</h2>
      <div className={styles.map_container}>
        <iframe
          className={styles.map_iframe}
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8386516641667!2d151.19!3d-33.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzEyLjAiUyAxNTHCsDExJzI0LjAiRQ!5e0!3m2!1sen!2sus!4v1234567890"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
