import "./style.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3 className="project__subHeading"> {project.title} </h3>
      <p className="project__desc">{project.description} </p>
      <a
        className="project__gitLink button button--projects"
        href={project.codeLink}
        target="_blank"
        rel="noreferrer"
      >
        {project.linkName}
      </a>
      <img className="project__pic" src={require('../../Assets/projectImages/' + project.img[0])} alt="project pic" />
    </div>
  );
};

export default Project;
