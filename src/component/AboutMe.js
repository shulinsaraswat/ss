import React, { Component} from 'react';
import about from '../images/AboutMe.png';
import '../css/Hero.css';
import '../css/aboutme.css';


export default class AboutMe extends Component{
    
    render(){
        return(
            <section id="about" className="section section-muted" data-aos="fade-up">
                <div className="section-container">
                    <div className="section-heading">
                        <p className="eyebrow">About</p>
                        <h2>Technology-driven problem solver building at the intersection of finance, data, and product innovation.</h2>
                    </div>
                    <div className="about-layout">
                        <img src={about} className="about-image" alt="Shulin working outdoors"/>
                        <div className="about-copy">
                            <p>
                                I am a Financial Technology graduate student at Imperial College London with over four years of experience in software engineering within global banking. My background spans full-stack development, financial systems, and data-driven problem solving, with a growing focus on quantitative finance, investment technology, and research infrastructure.
                            </p>
                            <p>
                                Currently, I contribute as a Quantitative Engineer at the Imperial Business School Student Investment Fund, where I work on building scalable data systems and research tooling for institutional-style investment workflows. Alongside this, I serve in leadership positions across Imperial's student community, leading initiatives focused on careers, collaboration, and professional development.
                            </p>
                            <p>
                                I am particularly interested in the intersection of finance, technology, and analytics, especially where robust engineering enables better decision-making, automation, and scalable research. My experience across engineering, leadership, and financial technology has shaped a strong interest in quantitative research, markets, and next-generation financial infrastructure.
                            </p>
                            <p>
                                Outside academics and technology, I enjoy following aviation, financial markets, and emerging innovations shaping the future of global industries.
                            </p>
                            <div className="metric-row">
                                <div>
                                    <strong>FinTech</strong>
                                    <span>Product design and financial technology</span>
                                </div>
                                <div>
                                    <strong>Quant</strong>
                                    <span>Models, dashboards, and backtesting</span>
                                </div>
                                <div>
                                    <strong>Leadership</strong>
                                    <span>Imperial student leadership roles</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
