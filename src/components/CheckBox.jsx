import React from "react";
import "./CheckBox.css";

export const CheckBox = () => {
    return (
        <div>
            <label className="Mainlabel">Skills</label>
            <div style={{ display: "flex" }}>
                <input type="checkbox" id="javascript" value="nodejs" />
                <label htmlFor="javascript"> Javascript</label>
                <input type="checkbox" id="vehicle1" value="nodejs" />
                <label htmlFor="vehicle3">HTML</label>
                <input type="checkbox" id="vehicle3" value="Boat" />
                <label htmlFor="vehicle3">CSS</label>
            </div>
        </div>
    );
};
