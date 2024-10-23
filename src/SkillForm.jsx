import { useState, useEffect, forwardRef } from "react";

const SkillForm = forwardRef(function SkillForm(
  { id = null, name = null },
  ref
) {
  /*
    If name is null, a new skill is being created
    If name isn't null, a skill is being edited
*/
  const [skillName, setSkillName] = useState(name);

  const closeModal = () => {
    ref.current.close();
  };

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

  return (
    <dialog ref={ref}>
      <button onClick={closeModal}>CLOSE MODAL</button>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="skillName">Skill</label>
        <input
          id="skillName"
          type="text"
          onChange={(e) => setSkillName(e.target.value)}
        />
        <button type="submit">{name ? "Change" : "Submit"}</button>
      </form>
    </dialog>
  );
});

export default SkillForm;
