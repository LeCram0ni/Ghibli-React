import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function ImageGallery() {

    return (
        <div className="wrapper">
            <div id="toShift" className="carousel" >

                <img src="/src/media/marnie012.jpg" alt="marnie012" />
                <img src="/src/media/marnie025.jpg" alt="marnie025" />
                <img src="/src/media/marnie028.jpg" alt="marnie028" />
                <img src="/src/media/marnie021.jpg" alt="marnie021" />
                <img src="/src/media/marnie001.jpg" alt="marnie001" />
                <img src="/src/media/marnie002.jpg" alt="marnie002" />
                <img src="/src/media/marnie004.jpg" alt="marnie004" />
                <img src="/src/media/marnie005.jpg" alt="marnie005" />
                <img src="/src/media/marnie009.jpg" alt="marnie009" />
                <img src="/src/media/marnie010.jpg" alt="marnie010" />
                <img src="/src/media/marnie014.jpg" alt="marnie014" />
                <img src="/src/media/marnie035.jpg" alt="marnie035" />
                <img src="/src/media/marnie050.jpg" alt="marnie050" />
            </div>
        </div>
    );
}

export default ImageGallery;
