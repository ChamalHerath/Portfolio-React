import React, {Component} from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';

import './header.css';

class SocialLinks extends Component {
    render() {
        return (
            <div className='header-socials'>
                <a href="https://www.linkedin.com/in/chamal-janadara-a96605197/" target='_blank'><AiOutlineLinkedin/></a>
                <a href="https://github.com/ChamalHerath" target='_blank'><AiOutlineGithub/></a>
                <a href="https://www.facebook.com/chamal.janadara/" target='_blank'><AiOutlineFacebook/></a>
            </div>
        );
    }
}

export default SocialLinks;