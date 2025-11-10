import ProjectSlider from "../components/fotoBeforeAfter/ProjectSlider.tsx";
import type {ProjectData} from "../utils/typs.ts";
import React, {useState} from "react";
interface ProjectsProps {
    bauProjects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ bauProjects }) => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
        bauProjects[0] || null
    );

    return (
        <section className="page container py-5">
            <h2 className="gradient text-center mb-4">Unsere Projekte</h2>
            <p className="lead text-center mb-5">
                Sehen Sie einige unserer erfolgreich abgeschlossenen Bauprojekte.
            </p>

            {/* Слайдер с выбранным проектом */}
            {selectedProject && (
                <ProjectSlider key={selectedProject.id} project={selectedProject} />
            )}

            {/* Сетка проектов */}
            <div className="row g-4 text-center justify-content-center">
                {bauProjects.map((p) => (
                    <div
                        className="col-12 col-md-6 col-lg-3"
                        key={p.id}
                        onClick={() => setSelectedProject(p)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className={`p-3 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow project-card ${selectedProject?.id === p.id ? "active" : ""}`}>
                            {p.houseImage && (
                                <img
                                    src={p.houseImage}
                                    alt={p.title}
                                    className="img-fluid rounded mb-3"
                                />
                            )}
                            <h5 className="gradient">{p.title}</h5>
                            <p>{p.shortDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;