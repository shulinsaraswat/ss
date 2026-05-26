import React, {Component} from 'react';
import '../css/resume.css';
import resume from '../images/resume.svg';
import myResume from '../files/resume.pdf';

export default class Resume extends Component{
    render(){
        return(
            <section id="resume" className="section section-muted resume-section" data-aos="fade-up">
                <div className="section-container resume-layout">
                    <img src={resume} className="resumeImage" alt="Resume illustration"/>
                    <div className="resume-copy">
                        <p className="eyebrow">Resume</p>
                        <h2>Prefer a concise version?</h2>
                        <p>
                            Download my resume for a compact overview of my professional experience, education, and technical background. For the freshest work, my GitHub and LinkedIn are linked below as well.
                        </p>
                        <div className="resume-actions">
                            <a className="btn primary-action" href={myResume} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-download" aria-hidden="true"></i>
                                Download Resume
                            </a>
                            <a className="btn secondary-action" href="https://github.com/shulinsaraswat" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a className="btn secondary-action" href="https://www.linkedin.com/in/shulinsaraswat/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
