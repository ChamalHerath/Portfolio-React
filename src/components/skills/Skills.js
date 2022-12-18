import React, {Component} from 'react';
import {FaLaravel} from 'react-icons/fa';
import {DiHtml5} from 'react-icons/di';
import {GrReactjs} from 'react-icons/gr';
import {SiJavascript} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
import {DiCss3} from 'react-icons/di';
import {SiMicrosoftazure} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {GiCheckMark} from 'react-icons/gi';

import './skills.css';

class Skills extends Component {
    render() {
        return (
            <section id='skills'>
                <h5>What Skills I Have</h5>
                <h2>My Skills</h2>
                <div className='container skills_container'>
                    <div className='main_skills'>
                        <h3>IT Related Skills</h3>
                        <div className='skills_content'>
                            <article className='skills_details'>
                                <DiHtml5 className='skills_icon'/>
                                <div>
                                    <h4>HTML</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <DiCss3 className='skills_icon'/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <FaLaravel className='skills_icon'/>
                                <div>
                                    <h4>Laravel</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <GrReactjs className='skills_icon'/>
                                <div>
                                    <h4>ReactJS</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <SiJavascript className='skills_icon'/>
                                <div>
                                    <h4>Java Script</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <SiMysql className='skills_icon'/>
                                <div>
                                    <h4>SQL</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <SiMongodb className='skills_icon'/>
                                <div>
                                    <h4>Mongo DB</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <SiMicrosoftazure className='skills_icon'/>
                                <div>
                                    <h4>Azure</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className='other_skills'>
                        <h3>Other Skills</h3>
                        <div className='skills_content'>
                            <article className='skills_details'>
                                <div>
                                    <GiCheckMark className='skills_icon'/>
                                    <small>Team Work & Organizational</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <div>
                                    <GiCheckMark className='skills_icon'/>
                                    <small>Comprehensive Problem-Solving Ability.</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <div>
                                    <GiCheckMark className='skills_icon'/>
                                    <small>Good communication with clients & team members</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <div>
                                    <GiCheckMark className='skills_icon'/>
                                    <small>Can manage a Team or project very well as a Leader</small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <div>
                                    <GiCheckMark className='skills_icon'/>
                                    <small>Positive Thinking & Self-Motivation
                                    </small>
                                </div>
                            </article>
                            <article className='skills_details'>
                                <div>
                                    <GiCheckMark className='skills_icon'/>
                                    <small>Fast Learner</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;