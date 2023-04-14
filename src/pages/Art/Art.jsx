import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../components/Navbar";
import {Modal, Box} from '@mui/material'; 
import React, {useState} from 'react';
import { Gallery } from "react-grid-gallery";
import './Art.css';

const Art = () => {
    const artImages = [{
        src: "/1.jpg",
        text:"forest green shrug crochet cardigan"
    },
    {
        src: "/2.jpg",
        text:"classic long grey crochet cardigan"
    },
    {
        src: "/25.jpg",
        text: "mint and cream cropped crochet cardigan"
    },
    {
        src: "/3.jpg",
        text: "colorful grany square crochet cardigan"
    },
    {
        src: "/6.jpg",
        text: "heather blue crochet pompeii button cardigan"
    },
    {
        src: "/5.jpg",
        text: "light pink summer crochet cardigan"
    },
    {
        src: "/4.jpg",
        text: "vladimir the fox - amigrumi doll"
    },
    {
        src: "/7.jpg",
        text: "grace the kitten - amigrumi doll"
    },
    {
        src: "/8.jpg",
        text: "oliver the bear - amigrumi doll"
    },
    {
        src: "/9.jpg",
        text: "happy veggies - amigrumi food"
    },
    {
        src: "/10.jpg",
        text: "the sister bunnies - amigrumi dolls"
    },
    {
        src: "/27.jpg",
        text: "emma the elephant - amigrumi doll"
    },
    {
        src: "/11.jpg",
        text: "burger, hot dog, and blt - amigrumi food"
    },
    {
        src: "/28.jpg",
        text: "friends forever - amigrumi dolls"
    },
    {
        src: "/12.jpg",
        text: "vegan and gluten free chocolate banana muffins"
    },
    {
        src: "/13.jpg",
        text: "vegan red velvet cake with fresh strawberries and blueberries"
    },
    {
        src: "/14.jpg",
        text: "lemon bundt cake"
    },
    {
        src: "/15.jpg",
        text: "vegan lemon cake with fresh raspberries"
    },
    {
        src: "/16.jpg",
        text: "vegan lemon cake"
    },
    {
        src: "/17.jpg",
        text: "vegan strawberry lemon cake with fresh raspberries and strawberries"
    },
    {
        src: "/18.jpg",
        text: "vegan sugar cookies"
    },
    {
        src: "/19.jpg",
        text: "vegan dark chocolate cake"
    },
    {
        src: "/20.jpg",
        text: "vegan apple pie"
    },
    {
        src: "/26.jpg",
        text: "french quiche with spinach"
    },
    {
        src: "/21.jpg",
        text: "vegan chocolate oreo crumble cake"
    },
    {
        src: "/22.jpg",
        text: "flower embroidery"
    },
    {
        src: "/23.jpg",
        text: "lace crocheted snowflakes"
    },
    {
        src: "/24.jpg",
        text: "harvest watercolor painting"
    }
    ]
    const [openModal, setOpenModal] = useState();
    const [imgsrc, setImagesrc] = useState();
    const [imgdescp, setImgdescp] = useState();

    return (
        <div className="art">
            <Navbar></Navbar>
            <div className="background">
                <img className="lines" src="lines.png" alt="decor"/>
                <img className="dots" src="dots.png" alt="decor"/>
                <img className="flowerOne" src="flowerTwo.png" alt="decor"/>
                <img className="flowerTwo" src="flowers.png" alt="decor"/>
            </div>
            <div className="bodyArt">
                {/* <h2>some of my hobbies</h2> */}
                {/* <Gallery images={artImages} /> */}
                    {/* {artImages.map((e,i) => 
                        <div className="outerChild" onClick={() => {setOpenModal(true); setImagesrc(e.src); setImgdescp(e.text)}} >
                            <div className="gridArt-child" style={{ 
                                backgroundImage: `url(${e.src})` 
                            }}></div>
                            
                        </div>
                    )} */}
                    {/* <Modal
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

                    <div class="grid">
                    <label for="pic-1" class="grid-item"><img src="/1.jpg"/></label>
                    <label for="pic-2" class="grid-item"><img src="/2.jpg"/></label>
                    <label for="pic-3" class="grid-item"><img src="/25.jpg"/></label>
                    <label for="pic-4" class="grid-item"><img src="/3.jpg"/></label>
                    <label for="pic-5" class="grid-item"><img src="/6.jpg"/></label>
                    <label for="pic-6" class="grid-item"><img src="/5.jpg"/></label>
                    <label for="pic-7" class="grid-item"><img src="/4.jpg"/></label>
                    <label for="pic-8" class="grid-item"><img src="/7.jpg"/></label>
                    <label for="pic-9" class="grid-item"><img src="/8.jpg"/></label>
                    <label for="pic-10" class="grid-item"><img src="/9.jpg"/></label>
                    <label for="pic-11" class="grid-item"><img src="/10.jpg"/></label>
                    <label for="pic-12" class="grid-item"><img src="/27.jpg"/></label>
                    <label for="pic-13" class="grid-item"><img src="/11.jpg"/></label>
                    <label for="pic-14" class="grid-item"><img src="/28.jpg"/></label>
                    <label for="pic-15" class="grid-item"><img src="/12.jpg"/></label>
                    <label for="pic-16" class="grid-item"><img src="/13.jpg"/></label>
                    <label for="pic-17" class="grid-item"><img src="/14.jpg"/></label>
                    <label for="pic-18" class="grid-item"><img src="/15.jpg"/></label>
                    <label for="pic-19" class="grid-item"><img src="/16.jpg"/></label>
                    <label for="pic-20" class="grid-item"><img src="/17.jpg"/></label>
                    <label for="pic-21" class="grid-item"><img src="/18.jpg"/></label>
                    <label for="pic-22" class="grid-item"><img src="/19.jpg"/></label>
                    <label for="pic-23" class="grid-item"><img src="/20.jpg"/></label>
                    <label for="pic-24" class="grid-item"><img src="/26.jpg"/></label>
                    <label for="pic-25" class="grid-item"><img src="/21.jpg"/></label>
                    <label for="pic-26" class="grid-item"><img src="/22.jpg"/></label>
                    <label for="pic-27" class="grid-item"><img src="/23.jpg"/></label>
                    <label for="pic-28" class="grid-item"><img src="/24.jpg"/></label>
                    </div>
                    <input type="checkbox" id="pic-1"/>
                    <label for="pic-1" class="lightbox"><img src="/1.jpg"/></label>
                    <input type="checkbox" id="pic-2"/>
                    <label for="pic-2" class="lightbox"><img src="/2.jpg"/></label>
                    <input type="checkbox" id="pic-3"/>
                    <label for="pic-3" class="lightbox"><img src="/25.jpg"/></label>
                    <input type="checkbox" id="pic-4"/>
                    <label for="pic-4" class="lightbox"><img src="/3.jpg"/></label>
                    <input type="checkbox" id="pic-5"/>
                    <label for="pic-5" class="lightbox"><img src="/6.jpg"/></label>
                    <input type="checkbox" id="pic-6"/>
                    <label for="pic-5" class="lightbox"><img src="/5.jpg"/></label>
                    <input type="checkbox" id="pic-7"/>
                    <label for="pic-5" class="lightbox"><img src="/4.jpg"/></label>
                    <input type="checkbox" id="pic-8"/>
                    <label for="pic-5" class="lightbox"><img src="/7.jpg"/></label>
                    <input type="checkbox" id="pic-9"/>
                    <label for="pic-5" class="lightbox"><img src="/8.jpg"/></label>
                    <input type="checkbox" id="pic-10"/>
                    <label for="pic-5" class="lightbox"><img src="/9.jpg"/></label>
                    <input type="checkbox" id="pic-11"/>
                    <label for="pic-5" class="lightbox"><img src="/10.jpg"/></label>
                    <input type="checkbox" id="pic-12"/>
                    <label for="pic-5" class="lightbox"><img src="/27.jpg"/></label>
                    <input type="checkbox" id="pic-13"/>
                    <label for="pic-5" class="lightbox"><img src="/11.jpg"/></label>
                    <input type="checkbox" id="pic-14"/>
                    <label for="pic-5" class="lightbox"><img src="/28.jpg"/></label>
                    <input type="checkbox" id="pic-15"/>
                    <label for="pic-5" class="lightbox"><img src="/12.jpg"/></label>
                    <input type="checkbox" id="pic-16"/>
                    <label for="pic-5" class="lightbox"><img src="/13.jpg"/></label>
                    <input type="checkbox" id="pic-17"/>
                    <label for="pic-5" class="lightbox"><img src="/14.jpg"/></label>
                    <input type="checkbox" id="pic-18"/>
                    <label for="pic-5" class="lightbox"><img src="/15.jpg"/></label>
                    <input type="checkbox" id="pic-19"/>
                    <label for="pic-5" class="lightbox"><img src="/16.jpg"/></label>
                    <input type="checkbox" id="pic-20"/>
                    <label for="pic-5" class="lightbox"><img src="/17.jpg"/></label>
                    <input type="checkbox" id="pic-21"/>
                    <label for="pic-5" class="lightbox"><img src="/18.jpg"/></label>
                    <input type="checkbox" id="pic-22"/>
                    <label for="pic-5" class="lightbox"><img src="/19.jpg"/></label>
                    <input type="checkbox" id="pic-23"/>
                    <label for="pic-5" class="lightbox"><img src="/20.jpg"/></label>
                    <input type="checkbox" id="pic-24"/>
                    <label for="pic-5" class="lightbox"><img src="/26.jpg"/></label>
                    <input type="checkbox" id="pic-25"/>
                    <label for="pic-5" class="lightbox"><img src="/21.jpg"/></label>
                    <input type="checkbox" id="pic-26"/>
                    <label for="pic-5" class="lightbox"><img src="/22.jpg"/></label>
                    <input type="checkbox" id="pic-27"/>
                    <label for="pic-5" class="lightbox"><img src="/23.jpg"/></label>
                    <input type="checkbox" id="pic-28"/>
                    <label for="pic-5" class="lightbox"><img src="/24.jpg"/></label>
            </div>
        </div>   
    )
};

export default Art;