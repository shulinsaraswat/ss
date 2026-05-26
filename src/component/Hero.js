import React, {Component} from 'react';
import hero from '../images/Shulin.jpg';
import scb from '../images/SCB.jpg';
import ibLogo from '../images/IB_Logo.jpg';
import '../css/Hero.css';

const heroSlides = [
    {
        src: hero,
        alt: 'Shulin Saraswat portrait',
        type: 'photo',
    },
    {
        src: scb,
        alt: 'Standard Chartered logo',
        type: 'photo',
    },
    {
        src: ibLogo,
        alt: 'Imperial Business School logo',
        type: 'photo',
    },
];

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
        };
    }

    componentDidMount() {
        this.slideTimer = window.setInterval(() => {
            this.setState(({activeSlide}) => ({
                activeSlide: (activeSlide + 1) % heroSlides.length,
            }));
        }, 3500);
    }

    componentWillUnmount() {
        window.clearInterval(this.slideTimer);
    }

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
                        {heroSlides.map((slide, index) => (
                            <img
                                className={`heroBanner ${slide.type === 'logo' ? 'logo-slide' : ''} ${index === this.state.activeSlide ? 'active' : ''}`}
                                src={slide.src}
                                alt={slide.alt}
                                key={slide.alt}
                            />
                        ))}
                        <div className="hero-carousel-dots" aria-label="Hero image carousel progress">
                            {heroSlides.map((slide, index) => (
                                <span className={index === this.state.activeSlide ? 'active' : ''} key={slide.alt}></span>
                            ))}
                        </div>
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
