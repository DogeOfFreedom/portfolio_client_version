import { useEffect, useRef, useState } from "react";
import AddItemButton from "./AddItemButton";
import ModalForm from "./modalForm/ModelForm";
import Project from "./Project";

function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false);
  const projectFormRef = useRef(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectsResponse = await fetch("http://localhost:3000/projects");
        const projectsJson = await projectsResponse.json();
        setProjects(projectsJson);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProjectData();
  }, [reload]);

  return (
    <>
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
              reload={reload}
              setReload={setReload}
            />
          ))}
        </div>
      </section>
      <ModalForm
        ref={projectFormRef}
        reload={reload}
        setReload={setReload}
        type="project"
      />
    </>
  );
}

export default ProjectSection;
