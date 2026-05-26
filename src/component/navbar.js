import React, {Component} from 'react';
import logo from '../images/logo.png';
import '../css/navbar.css';

export default class Navbar extends Component{
    render(){
        const { theme, onToggleTheme } = this.props;
        const isLight = theme === 'light';

        return(
            <nav className="navbar navbar-expand-lg navbar-light sticky-top portfolio-nav" data-aos="fade-down">
                <a className="navbar-brand brand-lockup" href="#home" aria-label="Shulin Saraswat home">
                    <img src={logo} width="42" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                    <span>Shulin Saraswat</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="myNav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#leadership">Leadership</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#community">Community</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <button
                        className="theme-toggle"
                        type="button"
                        aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
                        aria-pressed={isLight}
                        onClick={onToggleTheme}
                    >
                        <span className="theme-toggle-track">
                            <span className="theme-toggle-thumb"></span>
                        </span>
                        <span className="theme-toggle-label">{isLight ? 'Light' : 'Dark'}</span>
                    </button>
                </div>
            </nav>
        );
    }
}
