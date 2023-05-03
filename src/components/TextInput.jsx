import "./TextInput.css";

export const TextInput = ({
    label,
    name,
    handleChange,
    placeHolder,
    errorFields,
    isFormValidOnBlur,
}) => {
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
                onBlur={isFormValidOnBlur}
            />
            {errorFields[name] && (
                <p className="danger">{label} is not Valid</p>
            )}
        </div>
    );
};
