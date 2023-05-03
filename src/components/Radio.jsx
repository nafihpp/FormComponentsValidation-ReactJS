import React from "react";
import "./Radio.css";

export const Radio = ({ label, name, handleChange }) => {
    return (
        <>
            <label className="Mainlabel">{label}</label>
            <div className="checkBoxContainer" style={{ display: "flex" }}>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                {/* <span className="danger">
                <p>noooo</p>
            </span> */}
            </div>
        </>
    );
};
