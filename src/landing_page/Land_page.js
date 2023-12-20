// landing_page/Land_page.js

import React from 'react';
import './Land_page.css'

function Header() {

  const fitGeek = 'FitGeek'

  

  return (
    <>
      <div className='upper_header'>
          <div className='brand_name'> {/*This is for the logo_name */}
              <h1>{fitGeek}</h1>
          </div>
          
          <div className='user_verification'> {/*login and signup*/}
              <div className='log_in'>
                  <button className='btn_log_in'>
                    <h3>Login</h3>
                  </button>
              </div>
              <div className='sign_up'>
                  <button className="btn_sign_up">
                    <h3>Sign Up</h3>
                  </button>
              </div>
          </div>
      </div>

    </>
  )
}

function Body() {
  return (
    <>
    </>
  )
}

function Footer() {
  return(
    <>
    </>
  )
}

export { Header, Body };
