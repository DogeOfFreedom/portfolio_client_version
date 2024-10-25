import { useRef } from "react";
import ModalForm from "./modalForm/ModelForm";

function Project({ id, name, desc, link, reload, setReload }) {
  const ref = useRef(null);

  const openModal = () => {
    ref.current.showModal();
  };

  return (
    <>
      <div className="projectElement">
        <p className="miniHeading">{name}</p>
        <p className="projectDescription">{desc}</p>
        <a className="linkButton" href={link}>
          View
        </a>
        <button type="button" onClick={openModal}>
          Edit
        </button>
      </div>
      <ModalForm
        ref={ref}
        id={id}
        name={name}
        desc={desc}
        link={link}
        reload={reload}
        setReload={setReload}
        type="project"
      />
    </>
  );
}

export default Project;
