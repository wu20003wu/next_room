
import React, { useState } from 'react';
const LoginDialog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here using the username and password values
    console.log('Username:', username);
    console.log('Password:', password);
    // Clear the input fields
    setUsername('');
    setPassword('');
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginDialog;
