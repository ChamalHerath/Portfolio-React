import React, {Component} from 'react';
import CTA from "./CTA";
import ME from '../../assets/me.png'
import SocialLinks from "./SocialLinks";

import './header.css';

class Header extends Component {
    render() {
        return (
            <header className='container header_container'>
                <div>
                    <h5>Hello I'm</h5>
                    <h1>Chamal Janadara</h1>
                    <h5 className='text-light'>Frontend Developer</h5>

                    <CTA/>

                </div>
                <div className='me'>
                    <img src={ME} alt="me"/>
                </div>

                <SocialLinks/>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
            </header>
        );
    }
}

export default Header;