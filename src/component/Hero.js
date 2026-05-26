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
                        <h2 className="typing rotating-phrases" aria-label="Quantitative engineer, fintech builder, full-stack developer, product-minded technologist">
                            <span>Quantitative engineer</span>
                            <span>FinTech builder</span>
                            <span>Full-stack developer</span>
                            <span>Product-minded technologist</span>
                        </h2>
                        <p className="hero-summary">
                            I build reliable digital systems across cloud platforms, web applications, and IoT products, with a bias for practical architecture and crisp user experiences.
                        </p>
                        <div className="hero-actions">
                            <a className="btn primary-action" href="#community">View Initiatives</a>
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
