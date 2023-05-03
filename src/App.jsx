import { Fragment, useState } from "react";
import "./styles/global.css";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { CheckBox } from "./components/CheckBox";
import { Radio } from "./components/Radio";
import { SelectDropdown } from "./components/SelectDropdown";
import { Dob } from "./components/Dob";

function App() {
    //fields
    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        country: "",
        skills: [],
        gender: "",
    });

    //error Fields
    const [errorFields, setErrorFields] = useState({
        firstName: "",
        email: "",
        country: "",
        skills: "",
        gender: "",
    });

    //handling Checkbox
    const handleCheckBox = (e) => {
        if (e.target.checked) {
            fields.skills.push(e.target.value);
            console.log(fields);
        } else {
            fields.skills.pop(e.target.value);
            console.log(fields);
        }
    };

    //handleChange
    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    //Form Valid on Blur Checking
    const isFormValidOnBlur = (e) => {
        const { name, value } = e.target;
        let error = false;

        if (name === "firstName" && value === "") {
            error = true;
        } else if (
            name === "email" &&
            (value === "" ||
                !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                    value
                ))
        ) {
            error = true;
        } else if (name === "gender" && value === "") {
            error = true;
        } else if (name === "country" && value === "") {
            error = true;
        }

        setErrorFields((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    //Checking form is valid on submit
    const isFormValidOnSubmit = () => {
        const errors = {
            firstName: false,
            email: false,
            gender: false,
            skills: false,
            country: false,
        };

        Object.entries(fields).forEach(([key, value]) => {
            if (key == "skills") {
                if (fields[key].length == 0) {
                    errors[key] = true;
                }
            } else if (value == "") {
                errors[key] = true;
            }
        });
        setErrorFields(errors);

        if (Object.values(errors).some((error) => error === true)) {
            return false;
        }

        return true;
    };

    //Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValidOnSubmit()) {
            console.log("Valid");
            alert("Submitted");
            return;
        }
        console.log("Please fill the form Completely , form is Invalid");
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <h1>Register</h1>
                <p>Please fill the form.</p>
                <TextInput
                    label="FirstName"
                    handleChange={handleChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    name="firstName"
                    placeHolder="Enter the FirstName"
                />
                <TextInput
                    label="Email"
                    handleChange={handleChange}
                    isFormValidOnBlur={isFormValidOnBlur}
                    name="email"
                    placeHolder="Enter the Email"
                />
                <Radio
                    label="Gender"
                    heandleChange={handleCheckBox}
                    name="gender"
                />
                <CheckBox handleChange={handleCheckBox} />
                <Dob handleChange={handleChange} />
                <SelectDropdown label="Country" handleChange={handleChange} />
                <div className="buttonContainer">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Fragment>
    );
}

export default App;
