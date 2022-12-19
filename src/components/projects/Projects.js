import React, {Component} from 'react';
import './projects.css';

const projectData = [
    {
        projectId: 1,
        projectName: 'School Management System - Dickwella Vijitha Central College',
        description: 'It was my 2nd Year University Project. Incorporated theories learnt at the University like Java Basics, OOP concepts into practical with the\n' +
            'best industry practices.',
        technologies: 'Java, MySQL, NETBEANS'
    },
    {
        projectId: 2,
        projectName: 'Redesign a Website for Road Development Authority',
        description: 'Incorporated theories learnt under Human Computer Interactions module (3rd Year) at the University into practical with the\n' +
            'best industry practices.',
        technologies: 'HTML, CSS, JAVA SCRIPT, BOOTSTRAP, FIREBASE, VS-CODE'
    },
    {
        projectId: 3,
        projectName: 'Co-operative Insurance General Web site',
        description: 'Incorporated theories learnt at the University into practical with the\n' +
            'best industry practices in the internship period. Assisted the BA team to make presentations\n' +
            'with functional prototypes. This is my first internship project.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, MYSQL, GITLAB, VS-CODE'
    },
    {
        projectId: 4,
        projectName: 'Co-operative Life Insurance Web Site',
        description: 'Incorporated theories learnt at the University into practical with the\n' +
            'best industry practices in the internship period. Assisted the BA team to make presentations\n' +
            'with functional prototypes. This is my second internship project.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, MYSQL, GITHUB, VS-CODE'
    },
    {
        projectId: 5,
        projectName: 'Peoples Building Construction Website',
        description: 'People’s Building Construction is a remarkably leading Construction Company in Sri Lanka that serves ' +
            'the economical infrastructure sector in the country. Developed their website to uplift their online presence and customer base.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VS-CODE'
    },
    {
        projectId: 6,
        projectName: 'Sampath Advertising Website',
        description: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising ' +
            'company in Sri Lanka. Developed their web site to uplift their online presence and customer base.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VS-CODE'
    },
    {
        projectId: 7,
        projectName: 'Me2Works Freelancer Website',
        description: 'Incorporated theories learnt during internship period into practical with the\n' +
            'best industry practices. Collaborate with the team via work flow management tools in a remote\n' +
            'working environment while completing the work efficiently.',
        technologies: 'HTML, CSS, JAVA SCRIPT, NEXT JS, GITHUB, WEB-STORM, AZURE DEVOPS'
    },
]

class Projects extends Component {
    render() {
        return (
            <section id='projects'>
                <h5>What Projects I Have</h5>
                <h2>Personal Projects</h2>
                <div className='container projects_container'>
                    {
                        projectData.map(({projectId, projectName, description, technologies}) => {
                            return (
                                <div className='education_content'>
                                    <article key={projectId}>
                                        <h3>{projectName}</h3>
                                        <small>{description}</small>
                                        <p>Technologies:<b> {technologies}</b></p>
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

export default Projects;