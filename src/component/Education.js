import React, {Component} from 'react';
import '../css/education.css';

export default class Education extends Component{
    render(){
        return(
            <section id="education" className="section" data-aos="fade-up">
                <div className="section-container">
                    <div className="section-heading">
                        <p className="eyebrow">Education</p>
                        <h2>Academic training across financial technology, engineering, and applied systems.</h2>
                    </div>
                    <div className="education-list">
                        <article className="education-card">
                            <div className="education-card-header">
                                <div>
                                    <h3>Imperial College London</h3>
                                    <p>London, UK</p>
                                </div>
                                <span>Aug 2025 - Jun 2026</span>
                            </div>
                            <h4>MSc in Financial Technology (Merit)</h4>
                            <p className="module-label">Relevant modules</p>
                            <div className="module-tags">
                                <span>Systematic Trading Strategies with Machine Learning Algorithms</span>
                                <span>Machine Learning &amp; Finance</span>
                                <span>Big Data in Finance</span>
                                <span>Blockchain and Applications</span>
                                <span>Financial Econometrics</span>
                            </div>
                        </article>
                        <article className="education-card">
                            <div className="education-card-header">
                                <div>
                                    <h3>Vellore Institute of Technology</h3>
                                    <p>Vellore, India</p>
                                </div>
                                <span>Jul 2016 - Jun 2020</span>
                            </div>
                            <h4>B.Tech in Electronics and Communication, IoT &amp; Sensors (8.56/10.0)</h4>
                            <p className="module-label">Relevant modules</p>
                            <div className="module-tags">
                                <span>Data Structures</span>
                                <span>Statistics</span>
                                <span>Applied Linear Algebra</span>
                                <span>Applied Numerical Methods</span>
                                <span>Cloud Computing</span>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        );
    }
}
