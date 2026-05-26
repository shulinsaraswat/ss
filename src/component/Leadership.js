import React, {Component} from 'react';
import '../css/leadership.css';

export default class Leadership extends Component{
    render(){
        return(
            <section id="leadership" className="section section-muted" data-aos="fade-up">
                <div className="section-container">
                    <div className="section-heading">
                        <p className="eyebrow">Leadership</p>
                        <h2>Community roles focused on careers, student voice, and professional development.</h2>
                    </div>
                    <div className="leadership-grid">
                        <article className="leadership-card">
                            <span>Sep 2025 - Present</span>
                            <h3>President</h3>
                            <p className="leadership-org">IB India Business Career Club, Imperial College London</p>
                            <p>
                                Leading career initiatives, speaker events, and industry networking for a 100+ member community across finance, consulting, and technology.
                            </p>
                        </article>
                        <article className="leadership-card">
                            <span>Sep 2025 - Present</span>
                            <h3>Chair</h3>
                            <p className="leadership-org">Student Staff Committee, Imperial College London</p>
                            <p>
                                Representing the MSc FinTech student voice to faculty and driving structured feedback loops to improve the academic and student experience.
                            </p>
                        </article>
                        <article className="leadership-card">
                            <span>Sep 2025 - Present</span>
                            <h3>Student Ambassador</h3>
                            <p className="leadership-org">MSc Financial Technology Programme, Imperial College London</p>
                            <p>
                                Supporting outreach and recruitment activities while helping strengthen engagement across the Business School community.
                            </p>
                        </article>
                        <article className="leadership-card">
                            <span>Standard Chartered</span>
                            <h3>Mentorship &amp; Team Impact</h3>
                            <p className="leadership-org">Buddy Program and team enablement</p>
                            <p>
                                Mentored new hires through Standard Chartered's Buddy Program and received the Going the Extra Mile Award for collaboration, mentoring, and team impact.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
