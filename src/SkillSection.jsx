import { useEffect, useRef } from "react";
import { useState } from "react";
import AddItemButton from "./AddItemButton";
import ModalForm from "./modalForm/ModelForm";
import Skill from "./Skill";

function SkillSection() {
  const [skills, setSkills] = useState([]);
  const [reload, setReload] = useState(false);
  const skillFormRef = useRef(null);

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
    fetchSkillData();
  }, [reload]);

  return (
    <>
      <section>
        <h2>Skills</h2>
        <AddItemButton label="Add New Skill +" ref={skillFormRef} />
        <div className="itemContainer">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              id={skill.id}
              name={skill.name}
              reload={reload}
              setReload={setReload}
            />
          ))}
        </div>
      </section>
      <ModalForm
        ref={skillFormRef}
        type="skill"
        reload={reload}
        setReload={setReload}
      />
    </>
  );
}

export default SkillSection;
