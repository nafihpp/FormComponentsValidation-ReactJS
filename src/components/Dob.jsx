import React from "react";
import "./Dob.css";

export const Dob = ({ handleChange, label, errorFields, name }) => {
    return (
        <div className="formSingleContainer">
            <label htmlFor="" className="Mainlabel">
                {label}
            </label>
            <input
                placeholder="{label}"
                type="date"
                name="dob"
                className="inputSize"
                id="firstName"
                onChange={handleChange}
            />
            {errorFields[name] && <p className="danger">{label} is required</p>}
        </div>
    );
};
