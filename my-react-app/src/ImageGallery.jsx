import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function ImageGallery({images}) {

    return (
        <div className="wrapper">
            
            <div id="toShift" className="carousel">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                    />
                ))}
            </div>
        </div>
    );
}
