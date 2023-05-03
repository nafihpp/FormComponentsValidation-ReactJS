import "./SelectDropDown.css";

export const SelectDropdown = ({ label, handleChange, name, errorFields }) => {
    return (
        <div className="formSingleContainer">
            <label className="Mainlabel">{label}</label>
            <select
                className="inputSize"
                name="country"
                onChange={handleChange}
            >
                <option value="">Select</option>
                <option value="UAE">UAE</option>
                <option value="Qatar">Qatar</option>
                <option value="Oman">Oman</option>
            </select>
            {errorFields[name] && <p className="danger">{label} is required</p>}
        </div>
    );
};
