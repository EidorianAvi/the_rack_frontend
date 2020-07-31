import React, { useState } from "react";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      username: username,
      password: password,
    };
    props.loginUser(user);
  };

  const handleChange = ({ target }) => {
    return target.name === "username"
      ? setUsername(target.value)
      : setPassword(target.value);
  };

  return (
    <div className="login-section">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Please Login</h2>
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
        <button onClick={() => props.signUpButton()}>Create User</button>
        {props.alerts ? (
          <p className="success">{props.alerts}</p>
        ) : (
          <p className="error">{props.alerts}</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
