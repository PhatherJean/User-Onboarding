import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Component/Form";
import User from "./Component/User";
import * as yup from "yup";
import axios from "axios";
import schema from "./Component/Schema";

const information = {
  name: "",
  email: "",
  password: "",
  tos: false,
};

const infoError = {
  name: "",
  email: "",
  password: "",
  tos: false,
};

const initialUser = [];
const initialDisabled = true;

function App() {
  const [users, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(information);
  const [formError, setFormError] = useState(infoError);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res);
        setUser(res.data, ...users);
        setFormValues(information);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormError({
          ...formError,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormError({
          ...formError,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <h1>Howdy Folks</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formError}
        disable={disabled}
      />
      <User key={users.id} details={users} />;
    </div>
  );
}

export default App;
