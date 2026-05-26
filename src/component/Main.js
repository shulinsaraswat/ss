import React, {Component} from 'react';
import Navbar from './navbar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Education from './Education';
import Skill from './Skill';
import Experience from './Experience';
import Leadership from './Leadership';
import Project from './Project';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Scroll from './BackTopButton';

export default class Main extends Component{
    render(){
        const { theme, onToggleTheme } = this.props;

        return(
            <div className="site-shell">
                <Scroll showBelow={250} />
                <Navbar theme={theme} onToggleTheme={onToggleTheme}/>
                <Hero/>
                <AboutMe/>
                <Education/>
                <Skill/>
                <Experience/>
                <Leadership/>
                <Project/>
                <Resume/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}
