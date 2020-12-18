import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

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
          <div>{errors.expertise}</div>
          <div>{errors.role}</div>
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
              Expert
              <input
                name="expertise"
                type="radio"
                value="expert"
                checked={values.expertise === "expert"}
                onChange={onChange}
              />
            </label>

            <label>
              Intermediate
              <input
                name="expertise"
                type="radio"
                value="intermediated"
                checked={values.expertise === "intermediated"}
                onChange={onChange}
              />
            </label>

            <label>
              Entry
              <input
                name="expertise"
                type="radio"
                value="entry"
                checked={values.expertise === "entry"}
                onChange={onChange}
              />
            </label>

            <br></br>

            <label>
              Role:
              <select
                className="jobs"
                name="role"
                value={values.role}
                onChange={onChange}
              >
                <option>---Select Position---</option>
                <option value="enforcer">Enforcer</option>
                <option value="leader">Leader</option>
                <option value="civilian">Civilian</option>
              </select>
            </label>

            <br></br>

            <label>
              Terms Of Service
              <input
                type="checkbox"
                name="tos"
                checked={values.tos}
                onChange={onChange}
              />
            </label>
          </div>
        </div>
      </div>
      <button className="subBtn" disabled={disabled}>
        submit
      </button>
    </form>
  );
}
