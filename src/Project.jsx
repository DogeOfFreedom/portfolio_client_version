function Project({ name, desc, link }) {
  return (
    <div className="projectElement">
      <p className="miniHeading">{name}</p>
      <p className="projectDescription">{desc}</p>
      <a className="linkButton" href={link}>
        View
      </a>
    </div>
  );
}

export default Project;
