import AboutHero from "../components/about/hero";
import styles from "./About.module.css";
import NavBar from "../components/common/NavBar";
// import Hero from "./sections/Hero";
import MissionVision from "../components/about/missionVision";
import Highlights from "../components/about/highlights";
import Leadership from "../components/about/Leaderships";
import Facilities from "../components/about/Facilities";
import Achievements from "../components/about/Achievements";
import CTA from "../components/about/CTA";

const About = () => {
  return (
    <main className={styles.about_page}>
      <NavBar />
      <AboutHero />
      <MissionVision />

      <Highlights />

      <Leadership />

      <Facilities />

      <Achievements />

      <CTA />
    </main>
  );
};

export default About;
