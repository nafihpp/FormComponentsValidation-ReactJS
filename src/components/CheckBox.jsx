import { Fragment } from "react";
import "./CheckBox.css";

export const CheckBox = ({
    handleChange,
    label,
    errorFields,
    name,
    isFormValidOnBlur,
}) => {
    return (
        <Fragment>
            <div style={{ marginBottom: "15px" }}>
                <label className="Mainlabel">{label}</label>
                <div style={{ display: "flex" }}>
                    <input
                        type="checkbox"
                        id="javascript"
                        name="skills"
                        value="javascript"
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    />
                    <label htmlFor="javascript"> Javascript</label>
                    <input
                        type="checkbox"
                        id="html"
                        name="skills"
                        value="html"
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    />
                    <label htmlFor="html">HTML</label>
                    <input
                        type="checkbox"
                        id="css"
                        value="css"
                        name="skills"
                        onChange={handleChange}
                        onBlur={isFormValidOnBlur}
                    />
                    <label htmlFor="css">CSS</label>
                </div>
            </div>
            {errorFields[name] && (
                <p className="skill-danger">{label} is required</p>
            )}
        </Fragment>
    );
};
