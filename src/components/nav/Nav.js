import React, {Component, useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineLaptop} from 'react-icons/ai';
import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {AiOutlineContacts} from 'react-icons/ai';

import './nav.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

        return (
            <div>
                <nav>
                    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title='Home'><AiOutlineHome/></a>
                    <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''} title='About'><AiOutlineUser/></a>
                    <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''} title='Experience'><HiOutlineOfficeBuilding/></a>
                    <a href="#skills" onClick={() => setActiveNav('#skills')}  className={activeNav === '#skills' ? 'active' : ''} title='Skills'><AiOutlineLaptop/></a>
                    <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''} title='Contact'><AiOutlineContacts/></a>
                </nav>
            </div>
        );
}

export default Nav;