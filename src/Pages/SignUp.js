import React from 'react';
import './login.css';
import { useState } from 'react';
import { useSearchParams, Link, Form} from 'react-router-dom';
// import LandPage from '../landing_page/Land_page';

const Signup = () => {

  
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
          
          <Form method='POST'>
            <div className='container'>
                <div className='login-header'>Create Account</div>
                <div className='input-area'>
                <input className='input' type='text' value={userNameValue} onChange={handleUserName} placeholder='Enter your Name'/>
                    <input className='input' type='text' value={userNameValue} onChange={handleUserName} placeholder='Enter your Email'/>
                    {/* <h3>your username is {userNameValue}</h3> */}
                    <input type="password" value={password} onChange={handlePasswordChange} 
                    placeholder="Enter your password" className='pass'/>
                    <input type="password" value={password} onChange={handlePasswordChange} 
                    placeholder="COnfirm your password" className='pass'/>
                </div>
                <div className='btn'>
                    <button className='login-btn'>Log In</button>
                    <h3>or</h3>
                    <button className='g-btn'>Continue with Google</button>
                    <button className='fb-btn'>Continue with Facebook</button>
                </div>
                <div className='mt-4'>
                    <a role='button' className='btn-link' href='#'>
                    Already have account?
                    </a>
                </div>
                </div>
          </Form>
        
      </section>
    </>
  )
}

export default Signup;
