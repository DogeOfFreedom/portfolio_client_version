import { useRef } from "react";
import ModalForm from "./modalForm/ModelForm";

function Skill({ id, name, reload, setReload }) {
  const ref = useRef(null);

  const openModal = () => {
    ref.current.showModal();
  };

  return (
    <>
      <div className="skillElement" onClick={openModal}>
        <p>{name}</p>
      </div>
      <ModalForm
        id={id}
        name={name}
        type="skill"
        reload={reload}
        setReload={setReload}
        ref={ref}
      />
    </>
  );
}

export default Skill;
