import Navbar from "../../components/Navbar";
import React from 'react';
import './Projects.css';

const Projects = () => {
    const projectLogos = [{
        photo: "/growth.png",
        text:"Growth+"
    },
    {
        photo: "/pantry.png",
        text:"Pantry"
    },
    {
        photo: "/dockerhound.png",
        text: "Dockerhound"
    },
    {
        photo: "/kg.png",
        text: "Knightro's Gambit"
    },
    {
        photo: "/paradisepages.png",
        text: "Paradise Pages"
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