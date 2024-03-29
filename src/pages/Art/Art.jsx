import Navbar from "../../components/Navbar";
import React from 'react';
import './Art.css';

const Art = () => {
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
                <div class="grid">
                    <label for="pic-1" class="grid-item"><img src="/1.jpg" alt="artwork"/></label>
                    <label for="pic-2" class="grid-item"><img src="/2.jpg"alt="artwork"/></label>
                    <label for="pic-3" class="grid-item"><img src="/25.jpg"alt="artwork"/></label>
                    <label for="pic-4" class="grid-item"><img src="/3.jpg"alt="artwork"/></label>
                    <label for="pic-5" class="grid-item"><img src="/6.jpg"alt="artwork"/></label>
                    <label for="pic-6" class="grid-item"><img src="/5.jpg"alt="artwork"/></label>
                    <label for="pic-7" class="grid-item"><img src="/4.jpg"alt="artwork"/></label>
                    <label for="pic-8" class="grid-item"><img src="/7.jpg"alt="artwork"/></label>
                    <label for="pic-9" class="grid-item"><img src="/8.jpg"alt="artwork"/></label>
                    <label for="pic-10" class="grid-item"><img src="/9.jpg"alt="artwork"/></label>
                    <label for="pic-11" class="grid-item"><img src="/10.jpg"alt="artwork"/></label>
                    <label for="pic-12" class="grid-item"><img src="/27.jpg"alt="artwork"/></label>
                    <label for="pic-13" class="grid-item"><img src="/11.jpg"alt="artwork"/></label>
                    <label for="pic-14" class="grid-item"><img src="/28.jpg"alt="artwork"/></label>
                    <label for="pic-15" class="grid-item"><img src="/12.jpg"alt="artwork"/></label>
                    <label for="pic-16" class="grid-item"><img src="/13.jpg"alt="artwork"/></label>
                    <label for="pic-17" class="grid-item"><img src="/14.jpg"alt="artwork"/></label>
                    <label for="pic-18" class="grid-item"><img src="/15.jpg"alt="artwork"/></label>
                    <label for="pic-19" class="grid-item"><img src="/16.jpg"alt="artwork"/></label>
                    <label for="pic-20" class="grid-item"><img src="/17.jpg"alt="artwork"/></label>
                    <label for="pic-21" class="grid-item"><img src="/18.jpg"alt="artwork"/></label>
                    <label for="pic-22" class="grid-item"><img src="/19.jpg"alt="artwork"/></label>
                    <label for="pic-23" class="grid-item"><img src="/30.jpg"alt="artwork"/></label>
                    <label for="pic-24" class="grid-item"><img src="/31.jpg"alt="artwork"/></label>
                    <label for="pic-25" class="grid-item"><img src="/32.jpg"alt="artwork"/></label>  
                    <label for="pic-26" class="grid-item"><img src="/21.jpg"alt="artwork"/></label>
                    <label for="pic-27" class="grid-item"><img src="/26.jpg"alt="artwork"/></label>
                    <label for="pic-28" class="grid-item"><img src="/20.jpg"alt="artwork"/></label>
                    <label for="pic-29" class="grid-item"><img src="/33.jpg"alt="artwork"/></label>
                    <label for="pic-30" class="grid-item"><img src="/22.jpg"alt="artwork"/></label>
                    <label for="pic-31" class="grid-item"><img src="/23.jpg"alt="artwork"/></label>
                    <label for="pic-32" class="grid-item"><img src="/24.jpg"alt="artwork"/></label>
                    <label for="pic-33" class="grid-item"><img src="/29.jpg"alt="artwork"/></label>
                    <label for="pic-34" class="grid-item"><img src="/34.jpg"alt="artwork"/></label>
                    <label for="pic-35" class="grid-item"><img src="/35.jpg"alt="artwork"/></label>
                </div>
                <input type="checkbox" id="pic-1"/>
                <label for="pic-1" class="lightbox"><img src="/1.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-2"/>
                <label for="pic-2" class="lightbox"><img src="/2.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-3"/>
                <label for="pic-3" class="lightbox"><img src="/25.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-4"/>
                <label for="pic-4" class="lightbox"><img src="/3.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-5"/>
                <label for="pic-5" class="lightbox"><img src="/6.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-6"/>
                <label for="pic-6" class="lightbox"><img src="/5.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-7"/>
                <label for="pic-7" class="lightbox"><img src="/4.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-8"/>
                <label for="pic-8" class="lightbox"><img src="/7.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-9"/>
                <label for="pic-9" class="lightbox"><img src="/8.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-10"/>
                <label for="pic-10" class="lightbox"><img src="/9.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-11"/>
                <label for="pic-11" class="lightbox"><img src="/10.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-12"/>
                <label for="pic-12" class="lightbox"><img src="/27.jpg" alt="artwork"/></label>
                <input type="checkbox" id="pic-13"/>
                <label for="pic-13" class="lightbox"><img src="/11.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-14"/>
                <label for="pic-14" class="lightbox"><img src="/28.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-15"/>
                <label for="pic-15" class="lightbox"><img src="/12.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-16"/>
                <label for="pic-16" class="lightbox"><img src="/13.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-17"/>
                <label for="pic-17" class="lightbox"><img src="/14.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-18"/>
                <label for="pic-18" class="lightbox"><img src="/15.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-19"/>
                <label for="pic-19" class="lightbox"><img src="/16.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-20"/>
                <label for="pic-20" class="lightbox"><img src="/17.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-21"/>
                <label for="pic-21" class="lightbox"><img src="/18.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-22"/>
                <label for="pic-22" class="lightbox"><img src="/19.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-23"/>
                <label for="pic-23" class="lightbox"><img src="/30.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-24"/>
                <label for="pic-24" class="lightbox"><img src="/31.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-25"/>
                <label for="pic-25" class="lightbox"><img src="/32.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-26"/>
                <label for="pic-26" class="lightbox"><img src="/21.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-27"/>
                <label for="pic-27" class="lightbox"><img src="/26.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-28"/>
                <label for="pic-28" class="lightbox"><img src="/20.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-29"/>
                <label for="pic-29" class="lightbox"><img src="/33.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-30"/>
                <label for="pic-30" class="lightbox"><img src="/22.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-31"/>
                <label for="pic-31" class="lightbox"><img src="/23.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-32"/>
                <label for="pic-32" class="lightbox"><img src="/24.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-33"/>
                <label for="pic-33" class="lightbox"><img src="/29.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-34"/>
                <label for="pic-34" class="lightbox"><img src="/34.jpg"alt="artwork"/></label>
                <input type="checkbox" id="pic-35"/>
                <label for="pic-35" class="lightbox"><img src="/35.jpg"alt="artwork"/></label>
            </div>
        </div>   
    )
};

export default Art;