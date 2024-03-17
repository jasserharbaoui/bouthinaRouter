


import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    
    <div className='movie-card' style={{border:"solid 3px red",width:"30%", textAlign:"center"}}>
        
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} />
      </Link>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
