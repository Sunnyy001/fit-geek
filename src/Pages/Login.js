import React from 'react';
import './login.css';
import { useState } from 'react';
// import LandPage from '../landing_page/Land_page';

const Login = () => {

  
  const [userNameValue, setuserNameValue] = useState('')
  const[password, setPassword] = useState('');

  const handleUserName = (e) =>{
    setuserNameValue(e.target.value);
  }

  const handlePasswordChange = (ev) =>{
    setPassword(ev.target.value)
  }
  return (
    <>
      <section>
            <div className='main-header'>
                      <div className='upper_header'>
                          <div className='brand_name'> {/*This is for the logo_name */}
                              <h2>FitGeek</h2>
                          </div>
                      </div>
              </div>  
          
          <div className='container'>
            <div className='login-header'>Login</div>
              <div className='input-area'>
                  <input className='input' type='text' value={userNameValue} onChange={handleUserName} placeholder='Enter your Username'/>
                  {/* <h3>your username is {userNameValue}</h3> */}
                  <input type="password" value={password} onChange={handlePasswordChange} 
                  placeholder="Enter your password" className='pass'/>
                      {/* <h3>your username is {password}</h3> */}

              </div>
              <div className='btn'>
                <button className='login-btn'>Log In</button>
                <h3>or</h3>
                <button className='g-btn'>Continue with Google</button>
                <button className='fb-btn'>Continue with Facebook</button>
              </div>
        </div>
      </section>
    </>
  )
}

export default Login;
