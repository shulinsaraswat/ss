import React, {Component} from 'react';
import '../css/skill.css';

export default class Skill extends Component{
    render(){
        return(
            <section id="skill" className="section section-muted" data-aos="fade-up">
                <div className="section-container">
                    <div className="section-heading">
                        <p className="eyebrow">Skills</p>
                        <h2>A toolkit spanning quantitative analysis, financial technology, product delivery, and scalable engineering.</h2>
                    </div>
                    <div className="skills-layout">
                        <div className="skill-narrative">
                            <h3>Core strengths</h3>
                            <p>
                                I combine financial domain knowledge with hands-on engineering experience across data systems, APIs, cloud platforms, and product delivery. My work is strongest where robust technical implementation supports better analysis, automation, and decision-making.
                            </p>
                            <div className="skill-tags">
                                <span>Quant research tooling</span>
                                <span>Financial systems</span>
                                <span>Data pipelines</span>
                                <span>Cloud architecture</span>
                                <span>Agile delivery</span>
                            </div>
                        </div>
                        <div className="skill-category-grid" data-aos="fade-up">
                            <article className="skill-category-card">
                                <h3>Finance &amp; Quant</h3>
                                <div className="skill-pill-list">
                                    <span>Market Data Analysis</span>
                                    <span>Financial Modelling</span>
                                    <span>Portfolio Analytics</span>
                                    <span>Systematic Trading</span>
                                    <span>Backtesting</span>
                                </div>
                            </article>
                            <article className="skill-category-card">
                                <h3>Programming &amp; Data</h3>
                                <div className="skill-pill-list">
                                    <span>Java</span>
                                    <span>JavaScript</span>
                                    <span>SQL</span>
                                    <span>Python</span>
                                    <span>NumPy</span>
                                    <span>Pandas</span>
                                    <span>scikit-learn</span>
                                    <span>statsmodels</span>
                                </div>
                            </article>
                            <article className="skill-category-card">
                                <h3>Framework &amp; Tools</h3>
                                <div className="skill-pill-list">
                                    <span>Spring Boot</span>
                                    <span>React JS</span>
                                    <span>Ember JS</span>
                                    <span>REST APIs</span>
                                    <span>GraphQL</span>
                                    <span>PostgreSQL</span>
                                    <span>LitElement</span>
                                    <span>Microservices</span>
                                </div>
                            </article>
                            <article className="skill-category-card">
                                <h3>Cloud &amp; Infrastructure</h3>
                                <div className="skill-pill-list">
                                    <span>AWS</span>
                                    <span>Azure DevOps</span>
                                    <span>Data Pipelines</span>
                                    <span>Research Infrastructure</span>
                                    <span>Query Optimisation</span>
                                </div>
                            </article>
                            <article className="skill-category-card">
                                <h3>Product &amp; Delivery</h3>
                                <div className="skill-pill-list">
                                    <span>Jira</span>
                                    <span>ADO</span>
                                    <span>Confluence</span>
                                    <span>Agile/Scrum Methodology</span>
                                    <span>Stakeholder Management</span>
                                </div>
                            </article>
                            <article className="skill-category-card">
                                <h3>Certifications</h3>
                                <div className="skill-pill-list">
                                    <span>Bloomberg ESG</span>
                                    <span>Bloomberg Market Concepts</span>
                                    <span>Bloomberg Finance Fundamentals</span>
                                    <span>AWS Certified Cloud Practitioner</span>
                                </div>
                            </article>
                            <article className="skill-category-card skill-ai-card">
                                <h3>AI &amp; Developer Tools</h3>
                                <p className="skill-card-note">
                                    Used for code generation, debugging, and accelerating engineering workflows.
                                </p>
                                <div className="skill-pill-list">
                                    <span>GitHub Copilot</span>
                                    <span>Claude Code</span>
                                    <span>OpenAI Codex</span>
                                    <span>ChatGPT</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
