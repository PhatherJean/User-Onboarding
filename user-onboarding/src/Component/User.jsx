import React from "react";

export default function User({ details }) {
  if (!details) {
    return <h2>Awaiting for details...</h2>;
  }
  return (
    <div>
      <div className="user-container">
        <h2> {details.name} </h2>
        <p>Email: {details.email}</p>
        <p>Password: {details.password} </p>
      </div>
    </div>
  );
}
