import React from "react";
import "./Dob.css";

export const Dob = () => {
    return (
        <div className="formSingleContainer">
            <label htmlFor="" className="Mainlabel">
                Date of Birth
            </label>
            <input
                placeholder="{label}"
                type="date"
                name="{name}"
                className="inputSize"
                id="firstName"
            />
        </div>
    );
};
