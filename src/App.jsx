import "./App.css";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

function App() {
  return (
    <>
      <section className="heroBanner">
        <h1>Hi my name is Jiachen Si</h1>
        <p>I am a passionate amateur full stack web developer</p>
      </section>
      <SkillSection />
      <ProjectSection />
      <section>
        <h2>Contact Me</h2>
        <p>Email: jiachensi00@gmail.com</p>
        <p>Github: https://github.com/DogeOfFreedom</p>
      </section>
    </>
  );
}

export default App;
