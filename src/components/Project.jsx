export const Project = ({ project }) => {
  const { projectName, src, description, url } = project;
  return (
    <div className="project-work cell p-3">
      <h5 className="cs-topper">{src}</h5>
      <h3 className="cs-subtitle">
        {projectName}{" "}
        {url && (
          <a
            className="ml-auto project-link"
            href={url}
            target="_blank"
            title={`View Project`}
          >
            <svg
              className="feather feather-link"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </a>
        )}
      </h3>
      <p className="cs-text">{description}</p>
    </div>
  );
};
