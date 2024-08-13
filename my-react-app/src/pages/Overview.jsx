import React from 'react';
import { Link } from 'react-router-dom';

import movies from '../movies.json';

export default function Overview() {

    return (

        <div className="home">
            <h1>Übersicht aller Filme</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img src={movie.cover} />
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </li>
                )
                )
                }
            </ul>
        </div>
    );
}