import React from "react";
import "./SelectDropDown.css";

export const SelectDropdown = ({ label }) => {
    return (
        <div className="formSingleContainer">
            <label className="Mainlabel">{label}</label>
            <select className="inputSize" name="country">
                <option value="">Select</option>
                <option value="UAE">UAE</option>
                <option value="Qatar">Qatar</option>
                <option value="Oman">Oman</option>
            </select>
            {/* <span className="danger">
                <p>nop</p>
            </span> */}
        </div>
    );
};
