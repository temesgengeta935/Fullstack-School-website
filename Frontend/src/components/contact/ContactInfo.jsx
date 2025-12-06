import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "📍",
      title: "Address",
      content: "123 Education Street, Learning City, LC 12345",
      link: "https://maps.google.com",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@schoolname.edu",
      link: "mailto:info@schoolname.edu",
    },
    {
      icon: "⏰",
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
      link: null,
    },
  ];

  return (
    <section className={styles.contact_info_section}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Contact Information</h2>
        <div className={styles.info_grid}>
          {contactDetails.map((detail, index) => (
            <div key={index} className={styles.info_card}>
              <div className={styles.info_icon}>{detail.icon}</div>
              <h3 className={styles.info_title}>{detail.title}</h3>
              {detail.link ? (
                <a href={detail.link} className={styles.info_link}>
                  {detail.content}
                </a>
              ) : (
                <p className={styles.info_content}>{detail.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
