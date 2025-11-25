const About = () => {
    return (
        <section className="about-page container py-5">
            <h2 className="gradient text-center mb-4">Über uns</h2>
            <p className="lead text-center mb-5">
                SKBAU Service24 steht für Qualität, Zuverlässigkeit und Professionalität. Wir schaffen nicht nur Räume – wir setzen Maßstäbe.
            </p>

            <div className="row gy-4">
                <div className="col-md-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                        <h4 className="gradient mb-3">Unsere Mission</h4>
                        <p>
                            Wir streben danach, jedes Projekt mit höchster Präzision, Zuverlässigkeit und Transparenz umzusetzen.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                        <h4 className="gradient mb-3">Unsere Erfahrung</h4>
                        <p>
                            Über 7 Jahre Erfahrung – von kleinen Renovierungen bis hin zu großen Bauprojekten in Deutschland.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                        <h4 className="gradient mb-3">Unser Team</h4>
                        <p>
                            Ein starkes Team aus Handwerkern, Ingenieuren und Planern, die mit Leidenschaft und Verantwortung arbeiten.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                        <h4 className="gradient mb-3">Warum SKBAU?</h4>
                        <ul>
                            <li>Zuverlässigkeit & Transparenz</li>
                            <li>Faire Preise</li>
                            <li>Deutscher Qualitätsstandard</li>
                            <li>Individuelle Lösungen für jedes Projekt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;