import React, {Component} from 'react';
import hero from '../images/Shulin.jpg';
import '../css/Hero.css';

export default class Hero extends Component {
    render(){
        return(
            <section id="home" className="hero-section">
                <div className="hero-inner">
                    <div className="hero-copy" data-aos="fade-up">
                        <p className="eyebrow hero-eyebrow">
                            MSc in Financial Technology @ Imperial College London
                        </p>
                        <h1 className="heading-hero">Shulin Saraswat</h1>
                        <h2 className="typing rotating-phrases" aria-label="Financial technology graduate student, quantitative engineer, ex banking full-stack engineer, markets and data enthusiast">
                            <span>Financial Technology graduate student</span>
                            <span>Quantitative engineer</span>
                            <span>Ex banking full-stack engineer</span>
                            <span>Markets, data &amp; product strategy</span>
                        </h2>
                        <p className="hero-summary">
                            I build data-driven financial technology systems across quant research infrastructure, banking platforms, cloud architecture, and product-focused engineering.
                        </p>
                        <div className="hero-actions">
                            <a className="btn primary-action" href="#experience">View Experience</a>
                            <a className="btn secondary-action" href="#contact">Get in Touch</a>
                        </div>
                    </div>
                    <div className="hero-portrait-wrap" data-aos="fade-left" data-aos-delay="150">
                        <img className="heroBanner" src={hero} alt="Shulin Saraswat portrait"/>
                    </div>
                </div>
                <a href="#about">
                    <div className="lead-down" aria-label="Scroll to about section">
                        <span>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </span>
                    </div>
                </a>
            </section>
        );
    }
}
