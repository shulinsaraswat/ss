import React, {Component} from 'react';
import '../css/experience.css';

export default class Experience extends Component{
    render(){
        return(
            <section id="experience" className="section" data-aos="fade-up">
                <div className="section-container">
                    <div className="section-heading">
                        <p className="eyebrow">Experience</p>
                        <h2>Financial technology experience across quant infrastructure, platform modernisation, and scalable banking systems.</h2>
                    </div>
                    <div className="experience-list">
                        <article className="experience-item">
                            <div className="experience-meta">
                                <span>Oct 2025 - Present</span>
                                <strong>Imperial Business School Student Investment Fund</strong>
                            </div>
                            <div className="experience-card quantbox">
                                <h3>Quantitative Engineer</h3>
                                <ul>
                                    <li>Building production-grade data infrastructure and research tooling, including DataHub and a Research Toolkit, for systematic strategy development.</li>
                                    <li>Designing clean, versioned market and fundamental datasets to support scalable quant research, portfolio analysis, and backtesting workflows.</li>
                                </ul>
                            </div>
                        </article>
                        <article className="experience-item">
                            <div className="experience-meta">
                                <span>Apr 2024 - Aug 2025</span>
                                <strong>Standard Chartered</strong>
                            </div>
                            <div className="experience-card scbox">
                                <h3>Senior Analyst, Development</h3>
                                <ul>
                                    <li>Led ATOM-Service Bench integration, improving workflow efficiency and reducing end-to-end processing latency by approximately 40% across financial operations.</li>
                                    <li>Identified 15+ cross-component compatibility gaps and shaped scalable integration patterns using LitElements, GraphQL, and modern API design.</li>
                                    <li>Coordinated delivery with 10-15 cross-functional stakeholders across engineering, operations, and business teams.</li>
                                </ul>
                            </div>
                        </article>
                        <article className="experience-item">
                            <div className="experience-meta">
                                <span>Apr 2023 - Mar 2024</span>
                                <strong>Standard Chartered</strong>
                            </div>
                            <div className="experience-card productbox">
                                <h3>Senior Developer</h3>
                                <ul>
                                    <li>Re-architected and modernised ATOM's user interface using React and EmberJS, reducing load times by 30% and improving usability for 200+ daily users.</li>
                                    <li>Designed a real-time, data-intensive inbox module that improved transaction visibility, operational transparency, and decision-making.</li>
                                    <li>Improved application responsiveness through efficient state management, API optimisation, and performance-focused frontend delivery.</li>
                                </ul>
                            </div>
                        </article>
                        <article className="experience-item">
                            <div className="experience-meta">
                                <span>Sep 2020 - Mar 2023</span>
                                <strong>Standard Chartered</strong>
                            </div>
                            <div className="experience-card techbox">
                                <h3>Developer - Technology &amp; Innovation</h3>
                                <ul>
                                    <li>Migrated a legacy monolithic financial platform to AWS-based microservices, improving scalability, resilience, and infrastructure efficiency.</li>
                                    <li>Built an enterprise search platform aggregating 2,500+ workflows, helping leadership identify bottlenecks and optimise resource allocation.</li>
                                    <li>Performed database tuning and query optimisation to improve responsiveness in high-volume financial systems.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
