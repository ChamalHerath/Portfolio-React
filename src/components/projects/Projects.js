import React, {Component} from 'react';
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <section id='projects'>
                <h5>What Projects I Have</h5>
                <h2>Personal Projects</h2>
                <div className='container container_projects'>
                    <div className='projects_container'>
                        <div className='projects_content'>
                            <article>
                                <h3>School Management System</h3>
                                <small>This is my 2nd year 2nd Semester project regarding OOP module.</small>
                                <p>Technologies:<b> Java, MySQL</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>Redesign a Website for Road Development Authority</h3>
                                <small>This is 3rd Year 2nd Semester project regarding HCI module.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, BOOTSTRAP, FIREBASE</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>Co-operative Insurance General Web site</h3>
                                <small> This is my first internship project.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, REACTJS, MYSQL, GITLAB</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>Co-operative Life Insurance Web Site</h3>
                                <small> This is my second internship project.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, LARAVEL, MYSQL, GITHUB</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>People's Building Construction Website</h3>
                                <small>Peoples Building Construction (Pvt) Ltd is a trusted leading construction company
                                    which began as a small-scale company in 2006.
                                    They are currently the leading provider of construction services in the Sri
                                    Lankan construction sector.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VSCODE</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>Sampath Advertising Website</h3>
                                <small>SAMPATH ADVERTISING was incorporated in the year 2016 as both
                                    indoor and outdoor advertising company in Sri Lanka.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VSCODE</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>Sampath Advertising Website</h3>
                                <small>SAMPATH ADVERTISING was incorporated in the year 2016 as both
                                    indoor and outdoor advertising company in Sri Lanka.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VSCODE</b></p>
                            </article>
                        </div>
                        <div className='projects_content'>
                            <article>
                                <h3>Sampath Advertising Website</h3>
                                <small>SAMPATH ADVERTISING was incorporated in the year 2016 as both
                                    indoor and outdoor advertising company in Sri Lanka.</small>
                                <p>Technologies:<b> HTML, CSS, JAVA SCRIPT, LARAVEL, GITHUB, VSCODE</b></p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;