import { useState } from "react";

function SkillForm({ id, name, reload, setReload, closeModal }) {
  const [skillName, setSkillName] = useState(name);
  const [formError, setFormError] = useState("");

  const rerender = () => {
    setReload(!reload);
    closeModal();
    setSkillName("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      id,
      name: skillName,
    };
    const base = "http://localhost:3000/skills";
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

  const deleteSkill = async () => {
    try {
      const url = "http://localhost:3000/skills/" + id;
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
        <label htmlFor="skillName">Skill</label>
        <input
          id="skillName"
          type="text"
          onChange={(e) => setSkillName(e.target.value)}
          value={skillName}
        />
        <div>
          <p>{formError}</p>
        </div>
        {name && (
          <button type="button" onClick={deleteSkill}>
            Delete
          </button>
        )}
        <button type="submit">{name ? "Change" : "Submit"}</button>
      </form>
    </>
  );
}

export default SkillForm;
