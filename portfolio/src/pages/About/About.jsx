import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
             <div className="top-bar">
                <div className="logo"><a href='/about'><img src="/logo.png" alt='logo'/></a></div>
                <div className="grid-container">
                    <div className="grid-child"><button type="button" id="active"><a href="/about">about</a></button></div>
                    <div className="grid-child"><button type="button"><a href="/projects">projects</a></button></div>
                    <div className="grid-child"><button type="button"><a href="/art">art</a></button></div>
                    <div className="grid-child"><button type="button"><a href="/resume">resume</a></button></div>
                </div>
            </div>
            <div className="body-grid">
                <div className="body-child1">
                    <h2>hello, i'm ruth</h2>
                    <h3>a senior at the University of Central Florida<br/>studying computer science</h3>
                </div>
                <div className="body-child2">
                    <img id="profile" src="me.png" alt="profile"/>
                </div>
            </div>
        </div>   
    )
};

export default About;