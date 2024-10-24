import { useState } from "react";

function SkillForm({ id, name }) {
  const [skillName, setSkillName] = useState(name);

  const submitForm = async () => {
    const data = {
      name: skillName,
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

  const deleteSkill = async () => {
    const url = "http://localhost:3000/skills/" + id;
    try {
      await fetch(url, {
        method: "DELETE",
      });
    } catch (e) {
      console.log(e.message);
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
        {name && <button type="button">Delete</button>}
        <button type="submit">{name ? "Change" : "Submit"}</button>
      </form>
    </>
  );
}

export default SkillForm;
