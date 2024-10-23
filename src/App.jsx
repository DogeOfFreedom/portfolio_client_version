import { useEffect, useState } from "react";
import "./App.css";
import Skill from "./Skill";
import Project from "./Project";

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const skillsResponse = await fetch("http://localhost:3000/skills");
        const skillsJson = await skillsResponse.json();
        setSkills(skillsJson);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchProjectData = async () => {
      try {
        const projectsResponse = await fetch("http://localhost:3000/projects");
        const projectsJson = await projectsResponse.json();
        setProjects(projectsJson);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSkillData();
    fetchProjectData();
  }, []);

  return (
    <>
      <section className="heroBanner">
        <h1>Hi my name is Jiachen Si</h1>
        <p>I am a passionate amateur full stack web developer</p>
      </section>
      <section>
        <h2>Skills</h2>
        <div className="itemContainer">
          {skills.map((skill) => (
            <Skill key={skill.name} id={skill.id} name={skill.name} />
          ))}
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="itemContainer projectContainer">
          {projects.map((project) => (
            <Project
              key={project.name}
              desc={project.description}
              name={project.name}
              link={project.link}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>Contact Me</h2>
        <p>Email: jiachensi00@gmail.com</p>
        <p>Github: https://github.com/DogeOfFreedom</p>
      </section>
    </>
  );
}

export default App;
