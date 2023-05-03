import React from "react";
import "./TextInput.css";

export const TextInput = ({ label, name, handleChange, placeHolder }) => {
    return (
        <div className="formContainer">
            <label className="Mainlabel">{label}</label>
            <input
                placeholder={placeHolder}
                type="text"
                name={name}
                className="inputSize"
                id="firstName"
                onChange={handleChange}
            />
            {/* <span className="danger">
                <p>nooo</p>
            </span> */}
        </div>
    );
};
