import React from "react";
import type {TextAreaFieldProps} from "../../utils/typs.ts";

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, rows = 4, placeholder, required }) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <textarea id={name} name={name} className="form-control" rows={rows} placeholder={placeholder} required={required}></textarea>
    </div>
);

export default TextAreaField;