import ProjectForm from "./modalForm/ProjectForm";
import SkillForm from "./modalForm/SkillForm";

function GenericForm({
  id = "",
  name = "",
  desc = "",
  link = "",
  reload,
  setReload,
  closeModal,
  type,
}) {
  return (
    <>
      {type === "skill" ? (
        <SkillForm
          id={id}
          name={name}
          reload={reload}
          setReload={setReload}
          closeModal={closeModal}
        />
      ) : (
        <ProjectForm
          id={id}
          name={name}
          description={desc}
          link={link}
          reload={reload}
          setReload={setReload}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default GenericForm;
