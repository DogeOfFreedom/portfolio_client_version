import { useRef, useState } from "react";
import SkillForm from "./SkillForm";

function Skill({ id, name }) {
  const ref = useRef(null);

  const openModal = () => {
    ref.current.showModal();
  };

  return (
    <>
      <div className="skillElement" onClick={openModal}>
        <p>{name}</p>
      </div>
      <SkillForm id={id} name={name} ref={ref} />
    </>
  );
}

export default Skill;
