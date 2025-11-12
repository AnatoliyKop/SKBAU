import React from "react";
import { Phone, Mail, User } from "lucide-react";

const DirectContact : React.FC = () => (
        <div className="card shadow-sm p-3 mb-4">
            <h5 className="mb-3">Direkter Kontakt</h5>
            <p><User className="inline me-2" /> Stanislav Kostetskyi</p>
            <p><Phone className="inline me-2" /> +49 157 53787500</p>
            <p><Mail className="inline me-2" /> skbauservise24@gmail.com</p>
        </div>
    );


export default DirectContact;