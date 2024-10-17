import { useState } from "react";
import "./App.css";
import Skill from "./Skill";
import Project from "./Project";

function App() {
  const [count, setCount] = useState(0);
  const skills = [
    "CSS",
    "HTML",
    "JS",
    "React",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Mongoose",
  ];
  const projects = [
    {
      name: "Full Stack Blog API",
      link: "https://www.google.com",
    },
    {
      name: "Mock Shopping Platform",
      link: "https://www.google.com",
    },
    {
      name: "File Uploader",
      link: "https://www.google.com",
    },
  ];

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
            <Skill key={skill} name={skill} />
          ))}
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="itemContainer">
          {projects.map((project) => (
            <Project
              key={project.name}
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
