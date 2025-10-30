
import {servicesList} from "../utils/constants.ts";

const Services = () => {


    return (
        <section className="page container py-5">
            <h2 className="gradient text-center mb-4">Unsere Leistungen</h2>
            <p className="lead text-center mb-5">
                SKBAU Service24 steht für Qualität, Zuverlässigkeit und Professionalität.
            </p>

            <div className="row g-4 justify-content-center">
                {servicesList.map((service, i) => (
                    <div key={i} className="col-md-6">
                        <div className="p-4 rounded-4 bg-dark bg-opacity-50 text-light h-100 shadow">
                            <p>{service}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;