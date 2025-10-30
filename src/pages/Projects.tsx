import ColorBeforeAfterDrag from "../components/ColorBeforeAfterDrag.tsx";

const Projects = () => {
    return (
        <section className="page container py-5">
            <h2 className="gradient text-center mb-4">Unsere Projekte</h2>
            <p className="lead text-center mb-5">
                Sehen Sie einige unserer erfolgreich abgeschlossenen Bauprojekte.
            </p>

            <ColorBeforeAfterDrag/>

            <div className="row g-4">
                {[1, 2, 3, 4].map((n) => (
                    <div className="col-12 col-md-6 col-lg-3" key={n}>
                        <div className="p-3 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                            <img
                                src={`https://via.placeholder.com/300x200?text=Projekt+${n}`}
                                alt={`Projekt ${n}`}
                                className="img-fluid rounded mb-3"
                            />
                            <h5 className="gradient">Projekt {n}</h5>
                            <p>Kurzbeschreibung des Projekts {n}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;