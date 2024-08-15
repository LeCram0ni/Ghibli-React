import React from 'react';
import { Link } from 'react-router-dom';

import movies from '../movies.json';

export default function Overview() {

    return (

        <div className="overview-container">

            <h1>Übersicht aller Filme<div>
                arietty
                chihiro
                erdsee
                gluehwuermchen
                kaguya
                kiki
                marnie
                mohn
                nausica
                ponyo
                porcorosso
                stimme
                totoro
                wandelschloss
                wind
            </div></h1>
            
            <div id="overview-image-container">

                {movies.map(movie => (
                    <div key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
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