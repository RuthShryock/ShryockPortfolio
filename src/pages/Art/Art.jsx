import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Modal, Box} from '@mui/material'; 
import React, {useState} from 'react';
import './Art.css';

const Art = () => {
    const artImages = [{
        photo: "/1.jpg",
        text:"forest green shrug crochet cardigan"
    },
    {
        photo: "/2.jpg",
        text:"classic long grey crochet cardigan"
    },
    {
        photo: "/25.jpg",
        text: "mint and cream cropped crochet cardigan"
    },
    {
        photo: "/3.jpg",
        text: "colorful grany square crochet cardigan"
    },
    {
        photo: "/6.jpg",
        text: "heather blue crochet pompeii button cardigan"
    },
    {
        photo: "/5.jpg",
        text: "light pink summer crochet cardigan"
    },
    {
        photo: "/4.jpg",
        text: "vladimir the fox - amigrumi doll"
    },
    {
        photo: "/7.jpg",
        text: "grace the kitten - amigrumi doll"
    },
    {
        photo: "/8.jpg",
        text: "oliver the bear - amigrumi doll"
    },
    {
        photo: "/9.jpg",
        text: "happy veggies - amigrumi food"
    },
    {
        photo: "/10.jpg",
        text: "the sister bunnies - amigrumi dolls"
    },
    {
        photo: "/27.jpg",
        text: "emma the elephant - amigrumi doll"
    },
    {
        photo: "/11.jpg",
        text: "burger, hot dog, and blt - amigrumi food"
    },
    {
        photo: "/28.jpg",
        text: "friends forever - amigrumi dolls"
    },
    {
        photo: "/12.jpg",
        text: "vegan and gluten free chocolate banana muffins"
    },
    {
        photo: "/13.jpg",
        text: "vegan red velvet cake with fresh strawberries and blueberries"
    },
    {
        photo: "/14.jpg",
        text: "lemon bundt cake"
    },
    {
        photo: "/15.jpg",
        text: "vegan lemon cake with fresh raspberries"
    },
    {
        photo: "/16.jpg",
        text: "vegan lemon cake"
    },
    {
        photo: "/17.jpg",
        text: "vegan strawberry lemon cake with fresh raspberries and strawberries"
    },
    {
        photo: "/18.jpg",
        text: "vegan sugar cookies"
    },
    {
        photo: "/19.jpg",
        text: "vegan dark chocolate cake"
    },
    {
        photo: "/20.jpg",
        text: "vegan apple pie"
    },
    {
        photo: "/26.jpg",
        text: "french quiche with spinach"
    },
    {
        photo: "/21.jpg",
        text: "vegan chocolate oreo crumble cake"
    },
    {
        photo: "/22.jpg",
        text: "flower embroidery"
    },
    {
        photo: "/23.jpg",
        text: "lace crocheted snowflakes"
    },
    {
        photo: "/24.jpg",
        text: "harvest watercolor painting"
    }
    ]
    const [openModal, setOpenModal] = useState();
    const [imgsrc, setImagesrc] = useState();
    const [imgdescp, setImgdescp] = useState();

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
                    {artImages.map((e,i) => 
                        <div className="outerChild" onClick={() => {setOpenModal(true); setImagesrc(e.photo); setImgdescp(e.text)}} >
                            <div className="gridArt-child" style={{ 
                                backgroundImage: `url(${e.photo})` 
                            }}></div>
                            
                        </div>
                    )}
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
                    </Modal>

                </div>
            </div>
        </div>   
    )
};

export default Art;