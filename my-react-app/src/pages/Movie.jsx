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
        return <div className="not-found">Film nicht gefunden!</div>;
    }

    console.log(movie.shortinfobottom);

    return (
        <>

            <MainImage
                mainimg={movie.mainimg}
                title={movie.title}
                jptitle={movie.jptitle}
                translation={movie.translation}
                year={movie.year}
                length={movie.length}
            />
            <Description 
                shortinfo={movie.shortinfo}
                story={movie.story}
            />
            <ImageGallery 
                images={movie.images}
            />
            <ShortInfoBottom 
                shortinfobottom={movie.shortinfobottom}
            />
            <HR />





        </>
    );

};

