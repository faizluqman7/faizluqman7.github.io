type Project = {
    title: string;
    description: string[];
    link?: string;
};

const ProjectCard = ({
                         project,
                         isExpanded,
                         onToggle
                     }: {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
}) => (
    <div className="col">
        <div
            className={`card h-100 ${isExpanded ? 'shadow-lg' : 'shadow-sm'} transition`}
            onClick={onToggle}
            style={{ cursor: 'pointer' }}
        >
            <div className="card-body text-start">
                <h5 className="card-title fw-bold">
                    {project.link ? (
                        <h3
                            onClick={onToggle}

                        >
                            <h3>{project.title}</h3>
                            <p>Click to expand</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-dark rounded-circle"
                                style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                title="GitHub"
                            >
                                <i className="bi bi-github"></i>
                            </a>
                        </h3>
                    ) : (
                        <h3>{project.title}
                        <p>Click to expand</p>
                        </h3>
                    )}
                </h5>

                {isExpanded && (
                    <ul className="card-text mt-3">
                        {project.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
);

export default ProjectCard;