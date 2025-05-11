import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section className="section d-flex flex-column justify-content-center align-items-center text-center py-5">
            <div className="w-75">
                <h3 className="mb-4">💻 Projects</h3>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            isExpanded={expandedIndex === index}
                            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;