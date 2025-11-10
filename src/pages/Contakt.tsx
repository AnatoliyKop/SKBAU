const Contact = () => {
    return (
        <section className="page container py-5">
            <h2 className="gradient text-center mb-4">Kontakt</h2>
            <p className="lead text-center mb-5">
                Kontaktieren Sie uns für ein kostenloses Angebot oder eine persönliche Beratung.
                Egal welche Arbeiten – wir erledigen sie professionell und zuverlässig.
            </p>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form className="p-4 rounded-4 bg-dark bg-opacity-50 text-light shadow">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Ihr Name
                            </label>
                            <input type="text" id="name" className="form-control" placeholder="Max Mustermann" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                E-Mail
                            </label>
                            <input type="email" id="email" className="form-control" placeholder="email@example.com" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Telefonnummer
                            </label>
                            <input type="tel" id="phone" className="form-control" placeholder="+49 123 4567890" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Ihre Nachricht
                            </label>
                            <textarea id="message" className="form-control" rows={4}></textarea>
                        </div>

                        <button type="submit" className="btn btn-danger w-100">
                            Senden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;