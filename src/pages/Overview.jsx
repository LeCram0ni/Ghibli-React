import React from 'react';
import { Link } from 'react-router-dom';

import movies from '../movies.json';

export default function Overview() {

    return (

        <div className="overview-container">

            <h1>Übersicht aller Filme</h1>
            
            <div id="overview-image-container">

                {movies.map(movie => (
                    <div key={movie.id} className="image-wrapper">
                        <Link to={`/movie/${movie.id}`} className="image-link">
                            <img src={movie.cover} />
                        </Link>
                    </div>
                )
                )
                }


            </div>

        </div>
    );
}