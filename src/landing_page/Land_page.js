// landing_page/Land_page.js
import React from 'react';
import './Land_page.css'

import myImage from '/home/akshay/fit-geek/src/images/smartphone.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faCarrot } from '@fortawesome/free-solid-svg-icons'


function Header() {

  const fitGeek = 'FitGeek'
  const styles = {
    fontfamily: 'Playfair Display, serif',
    fontSize: '2.5rem'
  }

  return (
    
    <>
      <div className='header'>
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

          <section className='container_1'>
              <div className='typography'>
                  <div className='mini_typography'> 
                      <h4>#1 nutrition and diet planning App</h4>
                  </div>

                  <div className='main_typography'> 
                      <h4>Reach your Goals</h4>
                      <h6 style={styles}>with Fit-Geek</h6>
                  </div>

                  <div className='lower_typography'> 
                      <h5>Build healthy habits with the all-in-one food, exercise, and calorie tracker</h5>
                  </div>

                  <div className='btn_section'> 
                      <button>Start Today  <FontAwesomeIcon icon={faArrowRight} /> </button>
                      
                  </div>
              </div>
              
              <div className='svg_img'>
                  <img src={myImage} alt='not available rn'/>
              </div> 

          </section>
      </div>

    </>
  )
}

function Body() {

  const styles = {
    marginBottom: '2rem'
  }
  
  return (
    <>
      <div className='what_to_eat'>
          <div className='carrot' style={styles}>
              <FontAwesomeIcon icon={faCarrot} beat size="2xl" color='white'/>   
          </div>      
          <h1>Confused! What to Eat? When To Eat?</h1>
          <h3>Join with us and get personalised Diet Plans</h3>
          <a href='www.google.com'>Search Diet Plans </a>
      </div>
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
