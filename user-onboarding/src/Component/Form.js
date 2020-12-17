import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;
  console.log(props);
  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form container">
        <h2>New User</h2>

        <div className="error-container">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>

        <div className="input">
          <div>
            <label>
              Name:
              <input
                name="name"
                type="text"
                value={values.name}
                onChange={onChange}
              />
            </label>
            <br></br>
            <label>
              Email:
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
              />
            </label>
            <br></br>
            <label for="userPassword">
              Password:
              <input
                name="password"
                type="password"
                onChange={onChange}
                value={values.password}
              />
            </label>
            <br></br>
            <label>
              Terms Of Service
              <input
                type="checkbox"
                name="tos"
                checked={values.tos}
                onChange={onChange}
                required
              />
            </label>
          </div>
        </div>
      </div>
      <button disabled={disabled}>submit</button>
    </form>
  );
}
