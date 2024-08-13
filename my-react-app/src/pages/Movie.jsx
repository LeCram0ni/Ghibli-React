import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MainImage from '../MainImage';
import Description from '../Description';
import ImageGallery from '../ImageGallery';
import ShortInfoBottom from '../ShortInfoBottom';
import HR from '../HR';

import movies from '../movies.json';

export default function Movie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const movieData = movies.find(m => m.id === parseInt(id));
        setMovie(movieData);
    }, [id]);

    if (!movie) {
        return <div>Film nicht gefunden</div>;
    }


    return (
        <>

            <MainImage mainimg={movie.mainimg} 
            title={movie.title} 
            jptitle={movie.jptitle} 
            translation={movie.translation} 
            year={movie.year} 
            length={movie.length} />
            <Description />
            <ImageGallery />
            <ShortInfoBottom />
            <HR />





        </>
    );

};

/*


            <div className="movie-page">
                <div className="main-image-container">
                    <img src={movie['main-image']} alt={movie.title} className="main-image" />
                </div>

                <h1>{movie.title}</h1>
                <h2>{movie['jp-title']} ({movie['jp-translation']})</h2>
                <p>Jahr: {movie.year}</p>
                <p>Länge: {movie.length}</p>
                <p>{movie.shortinfo}</p>
                <p>{movie.rainbowstory}</p>
                <p>{movie['shortinfo-bottom']}</p>

                <div className="gallery">
                    {movie.images.map((imgUrl, index) => (
                        <img key={index} src={imgUrl} alt={`Gallery image ${index + 1}`} />
                    ))}
                </div>

                <p>Bewertung: {movie.ranking}</p>
            </div>

   */