import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faBars} from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../components/Navbar";
import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className="about">
            <Navbar></Navbar>
            <img className="lines" src="lines.png" alt="decor"/>
            <img className="dots" src="dots.png" alt="decor"/>
            <img className="flowerOne" src="flowerTwo.png" alt="decor"/>
            <img className="flowerTwo" src="flowers.png" alt="decor"/>
            <img className="me" src="me.png" alt="profile"/>
            <h3>Ruth Shryock</h3>
            <a href='https://www.linkedin.com/in/ruth-shryock/' target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href='https://github.com/RuthShryock'target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faGithubSquare}/></a>
            <a href='https://www.instagram.com/ruthie_shryock/' target="_blank" rel="noopener noreferrer" className='icon'><FontAwesomeIcon icon={faInstagramSquare}/></a>
            <button className='resume'>Resume</button>
        </div>   
    )
};

export default About;