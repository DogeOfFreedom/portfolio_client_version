import { useRef } from "react";
import ModalForm from "./modalForm/ModelForm";

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
      <ModalForm id={id} name={name} type="skill" ref={ref} />
    </>
  );
}

export default Skill;
