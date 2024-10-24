import ProjectForm from "./modalForm/ProjectForm";
import SkillForm from "./modalForm/SkillForm";

function GenericForm({
  id = null,
  name = null,
  desc = null,
  link = null,
  type,
}) {
  return (
    <>
      {type === "skill" ? (
        <SkillForm id={id} name={name} />
      ) : (
        <ProjectForm id={id} name={name} description={desc} link={link} />
      )}
    </>
  );
}

export default GenericForm;
