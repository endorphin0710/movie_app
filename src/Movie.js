import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster, genre}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <span className="movie_year">{year}</span>
                <p className="movie_summary">{summary}</p>
                <ul className="movie_genres">
                    {genre.map( (genre,i) => 
                        <li className="genres_genre" key={i}>{genre}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 year: PropTypes.number.isRequired,
 summary: PropTypes.string.isRequired,
 poster: PropTypes.string.isRequired,
 genre: PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Movie;