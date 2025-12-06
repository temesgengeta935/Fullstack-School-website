import CTA from "../components/about/CTA";
import NavBar from "../components/common/NavBar";
import ProgramsFeatures from "../components/programs/ProgramsFeatures";
import ProgramsGrid from "../components/programs/ProgramsGrid";
import ProgramsHero from "../components/programs/ProgramsHero";
import styles from "./Programs.module.css";

const Programs = () => {
  return (
    <>
      <NavBar />
      <div className={styles.programs}>
        <ProgramsHero />
        <ProgramsGrid />
        <ProgramsFeatures />
        <CTA />
      </div>
    </>
  );
};

export default Programs;
