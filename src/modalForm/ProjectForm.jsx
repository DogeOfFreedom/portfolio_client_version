import { useState } from "react";

function ProjectForm({ id, name, description, link }) {
  const [projectName, setProjectName] = useState(name);
  const [projectDescription, setProjectDescription] = useState(description);
  const [projectLink, setProjectLink] = useState(link);

  const submitForm = async () => {
    const data = {
      name: projectName,
      description: projectDescription,
      link: projectLink,
    };
    const base = "http://localhost:3000/skills";
    const url = name ? base + "/" + id : base;
    const method = name ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProject = async () => {
    const url = "http://localhost:3000/projects/" + id;
    await fetch(url, {
      method: "DELETE",
    });
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="projectName">Project Name</label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="projectDescription">Description</label>
          <textarea
            name=""
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="projectLink">URL</label>
          <input
            id="projectLink"
            type="text"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </div>
        {/* Needs react router */}
        {/* {name && (
          <button type="button" onClick={deleteProject}>
            Delete
          </button>
        )} */}
        <button>{name ? "Change" : "Submit"}</button>
      </form>
    </>
  );
}

export default ProjectForm;
