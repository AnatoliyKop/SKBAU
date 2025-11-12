import React from "react";
import ContactForm from "../components/contactForm/ContactForm.tsx";
import DirectContact from "../components/contactForm/DirectContact.tsx";
import SocialMediaContact from "../components/contactForm/SocialMediaContact.tsx";

const Contact: React.FC = () => (
    <section className="page container py-5">
        <h2 className="gradient text-center mb-4">Kontakt</h2>
        <p className="lead text-center mb-5">
            Kontaktieren Sie uns für ein kostenloses Angebot oder eine persönliche Beratung.
            Egal welche Arbeiten – wir erledigen sie professionell und zuverlässig.
        </p>

        <div className="row justify-content-center align-items-stretch g-4">
            <div className="col-md-6 col-lg-3 d-flex card flex-fill flex-column justify-content-between p-4 rounded-4 bg-dark bg-opacity-50 text-light shadow" >
                    <DirectContact />
                <SocialMediaContact/>

            </div>

            <div className="col-md-6 col-lg-8">
                <ContactForm />
            </div>
        </div>
    </section>
);

export default Contact;