import React from 'react';
import Navbar from '../component/Navbar';
import '../pages/Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="login-page">
      <div className='wrapper'>
          <div className='form-box login'>
            <form action=''>
              <h1>Register</h1>
              <div className='input-box'>
                  <input type='text'
                  placeholder='Username' required/>
                  <FaUser className='icon'/>
              </div>
              <div className='input-box'>
                  <input type='password'
                  placeholder='Password' required/>
                  <FaLock className='icon'/>
              </div>

              <div className='remember-forgot'>
                  <label><input type='checkbox'/>Remember me</label>
                  <a href='#'>Forgot password?</a>
              </div>
              <button type='submit'>Register</button>
              <div className='register-link'>
              </div>
            </form>
          </div>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;