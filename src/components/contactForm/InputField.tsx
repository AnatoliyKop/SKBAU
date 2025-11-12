import React from "react";
import type {InputFieldProps} from "../../utils/typs.ts";

const InputField: React.FC<InputFieldProps> = ({ label, type, name, placeholder, required }) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input type={type} id={name} name={name} className="form-control" placeholder={placeholder} required={required} />
    </div>
);

export default InputField;