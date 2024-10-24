import { useEffect, useRef, useState } from "react";
import "./App.css";
import Skill from "./Skill";
import Project from "./Project";
import ModalForm from "./modalForm/ModelForm";
import AddItemButton from "./AddItemButton";

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const skillFormRef = useRef(null);
  const projectFormRef = useRef(null);

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
        <AddItemButton label="Add New Skill +" ref={skillFormRef} />
        <div className="itemContainer">
          {skills.map((skill) => (
            <Skill key={skill.name} id={skill.id} name={skill.name} />
          ))}
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <AddItemButton label="Add New Project +" ref={projectFormRef} />
        <div className="itemContainer projectContainer">
          {projects.map((project) => (
            <Project
              key={project.name}
              id={project.id}
              name={project.name}
              desc={project.description}
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
      <ModalForm ref={skillFormRef} type="skill" />
      <ModalForm ref={projectFormRef} type="project" />
    </>
  );
}

export default App;
