import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ passdata }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to access navigation function

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication (replace with actual authentication logic)
    if (username === '' && password === '') {
      // Pass data to parent component
      passdata('authenticated'); 

      // Redirect to the Stores page upon successful login
      navigate('/stores'); // Use navigate function to navigate
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
