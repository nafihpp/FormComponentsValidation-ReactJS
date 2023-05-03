import React from "react";
import "./CheckBox.css";

export const CheckBox = ({ handleChange }) => {
    return (
        <div>
            <label className="Mainlabel">Skills</label>
            <div style={{ display: "flex" }}>
                <input
                    type="checkbox"
                    id="javascript"
                    name="skills"
                    value="javascript"
                    onChange={handleChange}
                />
                <label htmlFor="javascript"> Javascript</label>
                <input
                    type="checkbox"
                    id="html"
                    name="skills"
                    value="html"
                    onChange={handleChange}
                />
                <label htmlFor="html">HTML</label>
                <input
                    type="checkbox"
                    id="css"
                    value="css"
                    name="skills"
                    onChange={handleChange}
                />
                <label htmlFor="css">CSS</label>
            </div>
        </div>
    );
};
