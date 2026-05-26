import React, {Component} from 'react';
import '../css/project.css';

export default class Project extends Component{
    render(){
        return(
            <section id="community" className="section" data-aos="fade-up">
                <div className="section-container">
                    <div className="section-heading">
                        <p className="eyebrow">Community &amp; Initiatives</p>
                        <h2>Building communities, workplace initiatives, and team experiences beyond core delivery.</h2>
                    </div>
                    <div className="initiative-grid">
                        <article className="initiative-card" data-aos="fade-up">
                            <span className="initiative-label">IoThinC - VIT</span>
                            <h3>Co-Founder</h3>
                            <p>
                                Co-founded an IoT and innovation-focused student community at VIT, Vellore aimed at fostering technical learning, experimentation, and collaborative problem-solving.
                            </p>
                            <p>
                                Led initiatives including technical workshops, innovation discussions, and hands-on learning activities that encouraged students to explore emerging technologies and practical IoT applications.
                            </p>
                        </article>
                        <article className="initiative-card" data-aos="fade-up">
                            <span className="initiative-label">Standard Chartered</span>
                            <h3>Reverse Mentoring</h3>
                            <p>
                                Contributed to the Early Careers Working Group within the Functions vertical, supporting initiatives focused on employee engagement and workplace development.
                            </p>
                            <p>
                                Co-developed the Reverse Mentoring initiative to connect early-career professionals with middle and senior management, encouraging cross-generational learning, fresh perspectives, and dialogue around workplace culture, technology, and emerging trends.
                            </p>
                        </article>
                        <article className="initiative-card" data-aos="fade-up">
                            <span className="initiative-label">Standard Chartered</span>
                            <h3>Engagement Board</h3>
                            <p>
                                Served as a core member of a 6-person engagement board representing a 35-member team, with responsibility for improving colleague experience and team culture.
                            </p>
                            <p>
                                Organized team outings, workplace engagement activities, sports events, and social initiatives while designing personalized team merchandise and experiences to foster stronger collaboration and team bonding.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
