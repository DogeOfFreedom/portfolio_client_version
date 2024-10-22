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

  // Placeholder data until backend has been setup
  const stubSkills = [
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
  const stubProjects = [
    {
      name: "Full Stack Blog API",
      desc: "A RESTful blog platform where users can create, read, update, and delete posts. Built with ReactJS for the front-end and NodeJS with Express for the back-end, the API manages user authentication, post management, and comment functionality. Data is stored using PostgreSQL, and Prisma is utilized for database interactions.",
      link: "https://www.google.com",
    },
    {
      name: "Mock Shopping Platform",
      desc: "A mock e-commerce platform featuring user authentication, product browsing, cart management, and checkout processes. The front-end is developed using ReactJS, while the back-end, built with NodeJS and Express, handles product inventory and user data stored in MongoDB.",
      link: "https://www.google.com",
    },
    {
      name: "File Uploader",
      desc: "A file uploading tool that allows users to upload, store, and manage files. The application is built with a ReactJS front-end, NodeJS/Express back-end, and handles file storage and metadata management using a cloud-based service. The project emphasizes ease of use and secure file handling.",
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
            <Skill key={skill.name} name={skill.name} />
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
