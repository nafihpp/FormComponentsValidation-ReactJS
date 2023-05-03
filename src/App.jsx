import { Fragment, useState } from "react";
import "./styles/global.css";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { CheckBox } from "./components/CheckBox";
import { Radio } from "./components/Radio";
import { SelectDropdown } from "./components/SelectDropdown";
import { Dob } from "./components/Dob";

function App() {
    const [fields, setFields] = useState({
        firstName: "",
        email: "",
        country: "",
        skills: [],
        gender: "",
    });
    const [errorFields, setErrorFields] = useState({
        firstName: "",
        email: "",
        country: "",
        skills: "",
        gender: "",
    });
    const handleSubmit = () => {
        console.log("H");
    };
    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    };

    console.log(fields);
    return (
        <Fragment>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <h1>Register</h1>
                <p>Please fill the form.</p>
                <TextInput
                    label="FirstName"
                    handleChange={handleChange}
                    name="firstName"
                    placeHolder="Enter the FirstName"
                />
                <TextInput
                    label="Email"
                    handleChange={handleChange}
                    name="email"
                    placeHolder="Enter the Email"
                />
                <Radio
                    label="Gender"
                    handleChange={handleChange}
                    name="gender"
                />
                <CheckBox />
                <Dob />
                <SelectDropdown label="Country" />
            </form>
        </Fragment>
    );
}

export default App;
