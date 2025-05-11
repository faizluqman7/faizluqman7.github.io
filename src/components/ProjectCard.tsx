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
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {project.title}
                        </a>
                    ) : (
                        project.title
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