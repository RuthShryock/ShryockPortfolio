import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
             <div className="top-bar">
                <div className="logo"><a href='/about'><img src="/logo.png" alt='logo'/></a></div>
                <div className="grid-container">
                    <div className="grid-child"><button type="button"><a href="/about">about</a></button></div>
                    <div className="grid-child"><button type="button" id="active"><a href="/projects">projects</a></button></div>
                    <div className="grid-child"><button type="button"><a href="/art">art</a></button></div>
                    <div className="grid-child"><button type="button"><a href="/resume">resume</a></button></div>
                </div>
            </div>
        </div>   
    )
};

export default Projects;