import React, {Component} from 'react';
import './projects.css';

const projectData = [
    {
        projectId: 1,
        projectName: 'School Management System',
        description: 'This is my 2nd year 2nd Semester project regarding OOP module.',
        technologies: 'Java, MySQL'
    },
    {
        projectId: 2,
        projectName: 'Redesign a Website for Road Development Authority',
        description: 'This is 3rd Year 2nd Semester project regarding HCI module.',
        technologies: 'HTML, CSS, JAVA SCRIPT, BOOTSTRAP, FIREBASE'
    },
    {
        projectId: 3,
        projectName: 'Co-operative Insurance General Web site',
        description: 'This is my first internship project.',
        technologies: 'HTML, CSS, JAVA SCRIPT, REACTJS, MYSQL, GITLAB'
    },
    {
        projectId: 4,
        projectName: 'Co-operative Life Insurance Web Site',
        description: 'This is my second internship project.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, MYSQL, GITHUB'
    },
    {
        projectId: 5,
        projectName: 'Peoples Building Construction Website',
        description: 'Peoples Building Construction (Pvt) Ltd is a trusted leading construction company which ' +
            'began as a small-scale company in 2006. They are currently the leading provider of construction ' +
            'services in the Sri Lankan construction sector.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VS-CODE'
    },
    {
        projectId: 6,
        projectName: 'Sampath Advertising Website',
        description: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising company in Sri Lanka.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VSCODE'
    },
    {
        projectId: 7,
        projectName: 'Me2Works Freelancer Website',
        description: 'SAMPATH ADVERTISING was incorporated in the year 2016 as both indoor and outdoor advertising company in Sri Lanka.',
        technologies: 'HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VSCODE'
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