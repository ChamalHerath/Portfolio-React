import React, {Component} from 'react';
import ME from '../../assets/me-about.jpg';
import {FaUserGraduate} from "react-icons/fa";
import {AiOutlineMobile} from "react-icons/ai";
import {BsHouseFill} from "react-icons/bs";
import {FaBirthdayCake} from "react-icons/fa";

import './about.css';

class About extends Component {
    render() {
        return (
            <section id='about'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <div className='container about_container'>
                    <div className='about_me'>
                        <div className='about_me-img'>
                            <img src={ME} alt="About Me" srcset=""/>
                        </div>
                    </div>
                    <div className='about_content'>
                        <div className='about_cards'>
                            <article className='about_card'>
                                <FaUserGraduate className='about_icon'/>
                                <h5>Graduate</h5>
                                <small>BSc (Hons) in Information Technology Specializing in Information Technology</small>
                            </article>
                            <article className='about_card'>
                                <AiOutlineMobile className='about_icon'/>
                                <h5>Contact</h5>
                                <small>+94 77 821 3649</small>
                            </article>
                            <article className='about_card'>
                                <BsHouseFill className='about_icon'/>
                                <h5>Address</h5>
                                <small>Pahala Nindawela, Anukkane, Kuliyapitiya</small>
                            </article>
                            <article className='about_card'>
                                <FaBirthdayCake className='about_icon'/>
                                <h5>Birth Date</h5>
                                <small>29 March 1996</small>
                            </article>
                        </div>
                        <p>I am a Self-motivated, Optimistic, Detail-Oriented, Organized & Innovative Person looking to be part of an
                                Esteemed Organization where I can prove my Ability, Creativity & Skills to Further Develop the Expectations of my Employer through Commitment & Hard Work.</p>
                        <a className='btn btn-primary' href='#contact'>Contact Me</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;