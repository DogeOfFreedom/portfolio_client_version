import { useState } from "react";

function ProjectForm({
  id,
  name,
  description,
  link,
  reload,
  setReload,
  closeModal,
}) {
  const [projectName, setProjectName] = useState(name);
  const [projectDescription, setProjectDescription] = useState(description);
  const [projectLink, setProjectLink] = useState(link);
  const [formError, setFormError] = useState("");

  const rerender = () => {
    setReload(!reload);
    closeModal();
    setProjectName("");
    setProjectDescription("");
    setProjectLink("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      id,
      name: projectName,
      description: projectDescription,
      link: projectLink,
    };
    const base = "http://localhost:3000/projects";
    const url = name ? base + "/" + id : base;
    const method = name ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (!json.errors) {
        rerender();
      } else {
        setFormError(json.errors[0].msg);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteProject = async () => {
    try {
      const url = "http://localhost:3000/projects/" + id;
      const response = await fetch(url, {
        method: "DELETE",
      });
      const json = await await response.json();
      if (!json.errors) {
        rerender();
      } else {
        setFormError(json.errors[0].msg);
      }
    } catch (error) {
      console.log(error.message);
    }
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
        {name && (
          <button type="button" onClick={deleteProject}>
            Delete
          </button>
        )}
        <div>
          <p>{formError}</p>
        </div>
        <button>{name ? "Change" : "Submit"}</button>
      </form>
    </>
  );
}

export default ProjectForm;
