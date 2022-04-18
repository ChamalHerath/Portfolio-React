import React, {Component, useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineLaptop} from 'react-icons/ai';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {AiOutlineContacts} from 'react-icons/ai';
import {SiBookstack} from 'react-icons/si';

import './nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

        return (
            <div>
                <nav>
                    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title='Home'><AiOutlineHome/></a>
                    <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''} title='About'><AiOutlineUser/></a>
                    <a href="#skills" onClick={() => setActiveNav('#skills')}  className={activeNav === '#skills' ? 'active' : ''} title='Skills'><AiOutlineLaptop/></a>
                    <a href="#projects" onClick={() => setActiveNav('#projects')}  className={activeNav === '#projects' ? 'active' : ''} title='Projects'><AiOutlineFundProjectionScreen/></a>
                    <a href="#education" onClick={() => setActiveNav('#education')}  className={activeNav === '#education' ? 'active' : ''} title='Education'><SiBookstack/></a>
                    <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''} title='Contact'><AiOutlineContacts/></a>
                </nav>
            </div>
        );
}

export default Nav;