import React, {Component} from 'react';
import '../css/contact.css';

export default class Contact extends Component{
    render(){
        return(
            <section id="contact" className="section contact-section" data-aos="fade-up">
                <div className="section-container contact-layout">
                    <div>
                        <p className="eyebrow">Contact</p>
                        <h2>Let us talk finance, data, and technology.</h2>
                        <p>
                            I am open to conversations around quantitative research infrastructure, fintech product development, investment technology, and engineering roles where financial insight and robust systems thinking come together.
                        </p>
                    </div>
                    <div className="contact-actions">
                        <a href="mailto:shulin59@outlook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            Email
                        </a>
                        <a href="https://www.linkedin.com/in/shulinsaraswat/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            LinkedIn
                        </a>
                        <a href="https://github.com/shulinsaraswat" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            GitHub
                        </a>
                        <a href="https://shulinsaraswat.github.io/canonshuttershots/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-camera" aria-hidden="true"></i>
                            Photography
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}
