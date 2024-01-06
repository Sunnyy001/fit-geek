// landing_page/Land_page.js
import React from 'react';
import './Land_page.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import product from '../images/product.png';
import myImage_2 from '../images/left_cover.png';
import myImage from '../images/smartphone.jpg';
import community from '../images/community.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCarrot } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

const fitGeek = 'FitGeek'

function Header() {

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
                            <Link to={'/Login'}>
                                <button className='btn_log_in'>
                                    <h3>Login</h3>
                                </button>
                            </Link>
                        </div>
                        <div className='sign_up'>
                            <Link to={'/Login'}>
                            <button className="btn_sign_up">
                                <h3>Sign Up</h3>
                            </button>
                            </Link>
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
                        <img src={myImage} alt='not available rn' />
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

    const info_array = [
        {
            name: 'Sagar J.',
            review: "If this still doesn't work, please double-check if there are any other conflicting styles in your code, and ensure that there are no parent containers affecting the layout. If possible, provide more details about the HTML structure, and I'll do my best to assist you."
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        },
        {
            name: 'Sagar J.',
            review: 'My review is simple not for any other and like this only'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000,
    };



    return (
        <>
            <section>
                <div className='what_to_eat'>
                    <div className='carrot' style={styles}>
                        <FontAwesomeIcon icon={faCarrot} beat size="2xl" color='orange' />
                    </div>
                    <h1>Confused! What to Eat? When To Eat?</h1>
                    <h3>Join with us and get personalised Diet Plans</h3>
                    <a href='www.google.com'>Search Diet Plans </a>
                </div>
            </section>

            <section>
                <div className='heading_motivation'>
                    <h4>Get result</h4>
                    <h2>Nutrition tracking works, </h2>
                    <h2>here's the proof</h2>

                </div>
                <div className='container_2'>
                    <div className='nxt_to_slider_img'>
                        <img src={myImage_2} />
                    </div>
                    <div className='slider'>
                        <Slider {...settings}>
                            {info_array.map((i) => (
                                <>
                                    <div className='carousel_names'>
                                        <h2>{i.name}</h2>
                                    </div>
                                    <div className='carousel_reviews'>
                                        <h3>{i.review}</h3>
                                    </div></>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            <section>
                <div className='merchandise'>
                    <div className='headings'>
                        <h1>Strong. Lean.</h1>
                        <h1>Healthy.</h1>
                        <h3>Nutrition Course</h3>
                        <p>Learn the basics of nutrition and approach health with a new perspective. Develop eating habits that nourish your body and fuel your goals, all without strict dieting.</p>
                        <button className='buy_btn'>Buy Now</button>
                    </div>
                    <div className='product_img'>
                        <img src={product} />
                    </div>

                </div>
            </section>


        </>
    )
}

function Community() {
    return (
        <>
            <section>
                <div className='container_community'>
                    <div className='img_community'> <img src={community} /></div>
                    <div className='card_community'>

                        <h2>Hey! Come and Join the Community</h2>
                        <p>Learn the basics of nutrition and approach health with a new perspective. Develop eating habits that nourish your body and fuel your goals, all without strict dieting.</p>
                        <button>Join Community</button>
                    </div>
                </div>
            </section>
        </>
    )
};

function Blog() {
    return (
        <>
            <section>
                <div className='container_blog'>
                    <div className='blog_card'>
                        <div className='blog_img'>
                            <img />
                        </div>
                        <div className='blog_content'>
                            <h2></h2>
                            <p />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

function Footer() {
    return (
        <>
            <section>
                <div className='container_footer'>
                    <div className='bind_content'>
                        <div className='website_name'>
                            <h2>{fitGeek}</h2>
                            <button className='btn'>Get Started</button>
                        </div>
                        <div className='contents'>
                            <div className='products'>
                                <h3>Producsts</h3>
                                <a>Food</a>
                                <a>Exercise</a>
                                <a>Apps</a>
                                <a>Premium</a>
                            </div>

                            <div className='resources'>
                                <h3>Resources</h3>
                                <a>Blog</a>
                                <a>Community</a>
                                <a>Contact Us</a>
                                <a>Support Center</a>
                            </div>

                            <div className='company'>
                                <h3>Company</h3>
                                <a>About Us</a>
                                <a>Careers</a>
                                <a>Press</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




const LandPage = {
    Header,
    Body,
    Community,
    Footer,
};

export default LandPage;