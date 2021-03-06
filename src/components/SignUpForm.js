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

  return (
    <div className="login-section">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Create User</h2>
        <div className="login-input">
          <label for="username">Username</label>
          <input name="username" value={username} onChange={handleChange} />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
        <button onClick={props.loginButton}>Already a User?</button>
        {props.alerts ? null : <p className="error-message">{props.alerts}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
