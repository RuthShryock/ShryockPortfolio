import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Art.css';

const Art = () => {
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
                <div className="gridArt">
                    <div className="gridArt-child"><img src="/1.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/2.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/3.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/4.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/5.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/6.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/7.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/8.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/9.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/10.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/11.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/12.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/13.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/14.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/15.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/16.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/17.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/18.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/19.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/20.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/21.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/22.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/23.jpg" alt='cardigan'></img></div>
                    <div className="gridArt-child"><img src="/24.jpg" alt='cardigan'></img></div>
                </div>
            </div>
        </div>   
    )
};

export default Art;