const Services = () => {
    return (
        <section className="page container py-5">
            <h2 className="gradient text-center mb-4">Unsere Leistungen</h2>
            <p className="lead text-center mb-5">
                Wir bieten ein breites Spektrum an Bau- und Renovierungsdienstleistungen.
            </p>

            <div className="row g-4">
                {[
                    { title: "Renovierung", text: "Innen- und Außenrenovierungen aller Art." },
                    { title: "Malerarbeiten", text: "Professionelle Wandgestaltung und Farbarbeiten." },
                    { title: "Bodenverlegung", text: "Parkett, Laminat, Fliesen — präzise und langlebig." },
                    { title: "Trockenbau", text: "Wände, Decken und Schallschutzsysteme." },
                    { title: "Sanierung", text: "Komplettsanierungen von Wohnungen und Häusern." },
                    { title: "Bauplanung", text: "Beratung, Planung und Umsetzung aus einer Hand." },
                ].map((s) => (
                    <div className="col-12 col-md-6 col-lg-4" key={s.title}>
                        <div className="p-4 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                            <h4 className="gradient mb-3">{s.title}</h4>
                            <p>{s.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;