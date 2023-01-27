import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import './Projects.css';

const Projects = () => {
    const projectLogos = [{
        photo: "/growth.png",
        text:"ex"
    },
    {
        photo: "/pantry.png",
        text:"ex"
    },
    {
        photo: "/dockerhound.png",
        text: "ex"
    },
    {
        photo: "/kg.png",
        text: "ex"
    },
    {
        photo: "/paradisepages.png",
        text: "ex"
    }
    ]
    // const [openModal, setOpenModal] = useState();
    // const [imgsrc, setImagesrc] = useState();
    // const [imgdescp, setImgdescp] = useState();

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
                <div className="dropdown">
                    <button>
                        <FontAwesomeIcon icon={faBars} className="dropbtn"/>
                    </button>
                    <div className="dropdown-content">
                        <a href="/about">about</a>
                        <a href="/projects">projects</a>
                        <a href="/art">art</a>
                        <a href="/resume">resume</a>
                    </div>
                </div>
            </div>
            <div className="bodyProject">
                <div className="gridProjects">
                    {projectLogos.map((e,i) => 
                        <div className="outerPChild">
                            <div className="gridProject-child" style={{ 
                                backgroundImage: `url(${e.photo})` 
                            }}></div>
                            
                        </div>
                    )}
                    {/* 
                     onClick={() => {setOpenModal(true); setImagesrc(e.photo); setImgdescp(e.text)}}
                    <Modal
                        open={openModal === true}
                        onClose={() => setOpenModal(false)}
                        disableAutoFocus={true}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='modalBox'>
                        <button className='xmark' onClick={() => setOpenModal(false)}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                        <img id="modalImage" src={imgsrc} alt={imgdescp}></img>
                        </Box>
                    </Modal> */}

                </div>
        </div>  
    </div>  
    )
};

export default Projects;