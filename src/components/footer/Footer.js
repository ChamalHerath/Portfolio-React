import React, {Component} from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <a href="#" className='footer_logo'>CHAMAL JANADARA</a>
                <ul className='permalinks'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className='footer_social'>
                    <a href="https://www.linkedin.com/in/chamal-janadara-a96605197/" target='_blank'><AiOutlineLinkedin/></a>
                    <a href="https://twitter.com/ChamalHerath" target='_blank'><AiOutlineTwitter/></a>
                    <a href="https://www.instagram.com/chamaljherath/" target='_blank'><AiOutlineInstagram/></a>
                    <a href="https://www.facebook.com/chamal.janadara/" target='_blank'><AiOutlineFacebook/></a>
                </div>
                <div className='footer_copyright'>
                    <small>&copy; Deveoloped by <span style={{color: 'var(--color-primary)'}}>Chamal Janadara</span>. All Right Reserved.</small>
                </div>
            </footer>
        );
    }
}

export default Footer;