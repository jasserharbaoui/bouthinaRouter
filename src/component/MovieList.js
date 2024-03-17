


import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

function MovieList({ movies }) {
  const [filter, setFilter] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div style={{}}>
      <Filter setFilter={setFilter} />
      </div>
      
     <div style={{ display:"flex",
          flexWrap:"wrap",
          justifyContent:"space-between",
          flexDirection:"row",
          padding:"20px"
          }}> 
        {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
     </div>
    </div>
  );
}

export default MovieList;
