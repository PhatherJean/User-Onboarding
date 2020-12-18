import React from "react";

export default function User(props) {
  const { details } = props;
  if (!details.name || !details.email || !details.password || !details.role) {
    return (
      <div>
        <h2>Awaiting for details...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="user-container">
        <h2>{details.name}</h2>
        <p>Email:{details.email}</p>
        <p>Position:{details.role}</p>
        <p>Skill Level: {details.expertise}</p>
      </div>
    </div>
  );
}
