import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import {Modal, Box} from '@mui/material'; , {useState} 
import React from 'react';
import './Art.css';

const Art = () => {
    // const [openModal, setOpenModal] = useState();
    // const [id, setId] = useState();

    // const setSrc = () => {
    //     console.log(id);
    //     var stringMe = `/${id}.jpg`;
    //     document.getElementById("modalImage").src = stringMe;
    //     console.log(stringMe);
    // }

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: '80vw',
    //     height: '40vw',
    //     bgcolor: '#FFF6D8',
    //     color: 'white',
    //     p: 4,
    //   };
    return (
        <div className="art">
             <div className="top-bar">
                <div className="logo"><a href='/about'><img src="/logo.png" alt='logo'/></a></div>
                <div className="grid-container">
                    <div className="grid-child"><button type="button"><a href="/about">about</a></button></div>
                    <div className="grid-child"><button type="button"><a href="/projects">projects</a></button></div>
                    <div className="grid-child"><button type="button" id="active"><a href="/art">art</a></button></div>
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
            <div className="bodyArt">
                <h2>some of my hobbies</h2>
                <div className="gridArt">
                    <div className="outerChild" >
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/1.jpg")` 
                        }}></div>
                    </div>
                    {/* 
                    onMouseEnter={() => {setId(1); setSrc()}} onClick={() => {setOpenModal(true)}}
                    <Modal
                        open={openModal === true}
                        onClose={() => setOpenModal(false)}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <img id="modalImage" src='null' alt="cardigan"></img>
                        </Box>
                      </Modal> */}
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/2.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/3.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/5.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/6.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/4.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/7.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/8.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/9.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/10.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/11.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/12.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/13.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/14.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/15.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/16.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/17.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/18.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/19.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/20.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/21.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/22.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/23.jpg")` 
                        }}></div>
                    </div>
                    <div className="outerChild">
                        <div className="gridArt-child" style={{ 
                            backgroundImage: `url("/24.jpg")` 
                        }}></div>
                    </div>
                </div>
            </div>
        </div>   
    )
};

export default Art;