import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { FaUser, FaLock } from 'react-icons/fa';
import '../pages/Login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Anmeldung erfolgreich
        // Hier können Sie die Antwort verarbeiten, z.B. den Token speichern oder den Anmeldestatus aktualisieren
        const data = await response.json();
        console.log(data);

        // Check if the response contains a redirect URL
        if (data.redirect) {
          window.location.href = data.redirect; // Redirect to the specified URL
        }
      } else {
        // Anmeldung fehlgeschlagen
        // Hier können Sie eine Fehlermeldung anzeigen
      }
    } catch (error) {
      // Fehlerbehandlung
      console.error('Fehler bei der Anmeldung:', error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="login-page">
        <div className='wrapper'>
          <div className='form-box login'>
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <div className='input-box'>
                <input
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <FaUser className='icon' />
              </div>
              <div className='input-box'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <FaLock className='icon' />
                <button
                  type='button'
                  className='toggle-password-visibility'
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className='remember-forgot'>
                <label>
                  <input type='checkbox' />Remember me
                </label>
                <a href='#'>Forgot password?</a>
              </div>
              <button type='submit'>Login</button>
              <div className='register-link'>
                <p>
                  Don't have an account? <a href='register'>Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;