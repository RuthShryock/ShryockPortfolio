import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ShryockResume from "../../ShryockResume.pdf"
import Navbar from "../../components/Navbar";
import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about">
            <Navbar></Navbar>
            <div className="background">
                <img className="lines" src="lines.png" alt="decor"/>
                <img className="dots" src="dots.png" alt="decor"/>
                <img className="flowerOne" src="flowerTwo.png" alt="decor"/>
                <img className="flowerTwo" src="flowers.png" alt="decor"/>
            </div>
            <div className="vertical-box">
                <div className="profile-img"><img className="profile" src="me.png" alt="profile"/></div>
                <div className="name-text"><h3>Ruth Shryock</h3></div>
                <div className="clickable-icons">
                    <a href='https://www.linkedin.com/in/ruth-shryock/' target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href='https://github.com/RuthShryock'target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faGithubSquare}/></a>
                    <a href='https://www.instagram.com/ruthie_shryock/' target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faInstagramSquare}/></a>
                </div>
                <div className="resume-btn"><a href={ShryockResume} target="_blank" rel="noreferrer"><button className="resume">resume</button></a></div>
            </div> 
        </div>   
    )
};

export default About;