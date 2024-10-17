function Project({ name, link }) {
  return (
    <div className="projectElement">
      <p className="projectName">{name}</p>
      <p className="projectDescription">Lorem Ipsum Un dultra</p>
      <a className="linkButton" href={link}>
        View
      </a>
    </div>
  );
}

export default Project;
