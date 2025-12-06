import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import Map from "../components/contact/Map";
import NavBar from "../components/common/NavBar";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <NavBar />

      <div className={styles.contact}>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <Map />
      </div>
    </>
  );
};

export default Contact;
