import React, { useState } from "react";

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      username,
      password,
    };
    props.signUp(user);
  };

  const handleChange = ({ target }) => {
    return target.name === "username"
      ? setUsername(target.value)
      : setPassword(target.value);
  };

  const showAlerts = () => props.alerts.map((alert) => <p>{alert}</p>);

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label>Username</label>
      <input name="username" value={username} onChange={handleChange} />
      <label>Password</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <input type="submit" />
      {props.alerts ? showAlerts() : null}
      <button onClick={props.loginButton}>Already a User?</button>
    </form>
  );
};

export default SignUpForm;
