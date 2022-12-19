import React, {Component} from 'react';
import './education.css'

const educationData = [
    {
        eduId: 1,
        certName: 'Microsoft Azure Fundamentals TechNet Online Academy',
    },
    {
        eduId: 2,
        certName: 'Certificate of Participation - ICAC \n' +
            'IEEE Student Branch of SLIIT',
    },
    {
        eduId: 3,
        certName: 'HTML5 - From Basics to Advanced level (2021) Udemy',
    },
    {
        eduId: 4,
        certName: 'Introduction to Microservices\n' +
            'EdYoda Digital University',
    },
    {
        eduId: 5,
        certName: 'IEEE CyberShield - IEEE Computer Society of SLIIT',
    },
    {
        eduId: 6,
        certName: 'HTML Certification Course on Sololearn',
    }
]

class Education extends Component {
    render() {
        return (
            <section id='education'>
                <h5>What I Followed</h5>
                <h2>Education & Certification Courses</h2>
                <div className='container education_container'>
                    {
                        educationData.map(({eduId, certName}) => {
                            return (
                                <div className='education_content'>
                                    <article key={eduId}>
                                        <h3>{certName}</h3>
                                    </article>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Education;