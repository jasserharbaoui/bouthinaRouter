

// MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';


function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id ,10)); // Parse id to integer

    // Vérification si le film existe
    if (!movie) {
        return <div>Movie not found</div>;
      }
      
  return (
    <div className='movie-card1'>
      <button><Link to="/">Go back to homepage</Link></button>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <iframe
        title="trailer"
        width="560"
        height="315"
        src={movie.trailerURL}
        
        allowFullScreen
      ></iframe>
      
    </div>
  );
}

export default MovieDetails;
