import "./Radio.css";

export const Radio = ({ label, name, handleChange, errorFields }) => {
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
                {errorFields[name] && (
                    <p className="danger">{label} is required</p>
                )}
            </div>
        </>
    );
};
