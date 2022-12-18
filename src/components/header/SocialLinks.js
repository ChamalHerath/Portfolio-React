import React, {Component} from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

import './header.css';

class SocialLinks extends Component {
    render() {
        return (
            <div className='header-socials'>
                <a href="https://www.linkedin.com/in/chamal-janadara-a96605197/" target='_blank' rel="noreferrer"><AiOutlineLinkedin/></a>
                <a href="mailto: chamaljanadara@gmail.com" target='_blank' rel="noreferrer"><SiGmail/></a>
                <a href="https://github.com/ChamalHerath" target='_blank' rel="noreferrer"><AiOutlineGithub/></a>
                <a href="https://www.facebook.com/chamal.janadara/" target='_blank' rel="noreferrer"><AiOutlineFacebook/></a>
            </div>
        );
    }
}

export default SocialLinks;