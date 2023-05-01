import { faGithub, faSafari } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../../components/Navbar";
import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectLogos = [{
        photo: "/growth.png",
        text:"Growth+",
        link: "https://growthplus4a.org",
        github: "https://github.com/ucfcs/GrowthPlus",
        about: "math application for children in Africa",
        role: "project manager",
        type: "UCF Senior Design Project",
        tech: "Android Studio, Java, Realm, Expresso"
    },
    {
        photo: "/pantry.png",
        text:"Pantry",
        link: "https://newpantry.herokuapp.com",
        github: "https://github.com/C-Shrestha/newpantry",
        about: "website which allows users to organize, plan, and cook based on items in their pantry",
        role: "frontend developer",
        type: "UCF Group Project",
        tech: "MERN Stack"
    },
    {
        photo: "/dockerhound.png",
        text: "Dockerhound",
        link: "https://www.pnc.com", 
        github: "https://www.pnc.com",
        about: "application which automates dependancy updates",
        role: "backend developer",
        type: "PNC Inten Group Project",
        tech: "Go, Jenkins, SonarQube, VSCode" 
    },
    {
        photo: "/kg.png",
        text: "Knightro's Gambit", 
        link: "https://ucfai.github.io/knightros-gambit/", 
        github: "https://github.com/ucfai/knightros-gambit",
        about: "an automatic chessboard powered by a custom chess AI",
        role: "fontend developer",
        type: "UCF Club Project",
        tech: "Python, Javascript, HTML/CSS"
    },
    {
        photo: "/paradisepages.png",
        text: "Paradise Pages",
        link: "http://4331paradise.com",
        github: "https://github.com/Paradise-Pages/COP4331-Group6",
        description: "About: website which allows users to organize, plan, and cook based on items in their pantry \nRole: frontend developer \nTechnolgies used: MERN Stack",
        about: "a themed contact manager which allows users to organize, edit, and search for contacts",
        role: "fontend developer",
        type: "UCF Group Project",
        tech: "LAMP Stack"
    },
    {
        photo: "/logo.png", 
        text: "Portfolio", 
        link: "https://ruthshryock.com",
        github: "https://github.com/RuthShryock/ShryockPortfolio",
        about: "personal portfolio website",
        role: "creator/developer",
        type: "Personal Project",
        tech: "React, Netifly, GoDaddy"
    }
    ]


    return (
        <div className="projects">
            <Navbar></Navbar>
            <div className="background">
                <img className="lines" src="lines.png" alt="decor"/>
                <img className="dots" src="dots.png" alt="decor"/>
                <img className="flowerOne" src="flowerTwo.png" alt="decor"/>
                <img className="flowerTwo" src="flowers.png" alt="decor"/>
            </div>
            <div className="bodyProject">
                <div className="gridProjects">
                    {projectLogos.map((e,i) => 
                        <div className="outerPChild">
                            <div className="gridProject-child"><a href={e.link} target="_blank" rel="noopener noreferrer" className="weblink">{e.text}</a><br/><a href={e.github}target="_blank" rel="noopener noreferrer" className='icons'><FontAwesomeIcon icon={faGithub}/></a><a href={e.link}target="_blank" rel="noopener noreferrer" className='icons'><FontAwesomeIcon icon={faSafari}/></a></div>
                            <div className="miniGrid">
                                <div className="childGrid"><a href={e.link} target="_blank" rel="noopener noreferrer" ><div className="pic" style={{backgroundImage: `url(${e.photo})`}}></div></a></div>
                                <div className="descp"><b>About: </b>{e.about}<br/><b>Role: </b>{e.role}<br/><b>Type: </b>{e.type}<br/><b>Tech Stack: </b>{e.tech}<br/></div>
                            </div>
                        </div>
                    )}
                </div>
        </div>   
        

    </div>  
    )
};

export default Projects;
