import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import '../css/navbar.css';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skill', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'community', label: 'Community' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
    const [activeSection, setActiveSection] = useState('home');
    const isLight = theme === 'light';

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        let ticking = false;

        const updateActiveSection = () => {
            const readingLine = Math.min(window.innerHeight * 0.38, 320);
            const active = sections.find((section) => {
                const rect = section.getBoundingClientRect();
                return rect.top <= readingLine && rect.bottom > readingLine;
            });

            if (active) {
                setActiveSection(active.id);
            }
            ticking = false;
        };

        const requestUpdate = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSection);
                ticking = true;
            }
        };

        updateActiveSection();
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);

        return () => {
            window.removeEventListener('scroll', requestUpdate);
            window.removeEventListener('resize', requestUpdate);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top portfolio-nav" data-aos="fade-down">
            <a className="navbar-brand brand-lockup" href="#home" aria-label="Shulin Saraswat home" onClick={() => setActiveSection('home')}>
                <img src={logo} width="32" height="32" className="d-inline-block align-top" alt="" loading="lazy" />
                <span>Shulin Saraswat</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="myNav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <a
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                href={`#${item.id}`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="theme-toggle"
                    type="button"
                    aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
                    aria-pressed={isLight}
                    onClick={onToggleTheme}
                    title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
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
