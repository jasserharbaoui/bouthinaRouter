// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails';
import MoviesData from './component/moviesData';

import './App.css'
 

function App() {
 

  
  return (

    <div>
      <h1>MY BEST MOUVIES</h1>
    <Routes>
      <>
      
        
          {/* <Route path="/movie/:id">
            <MovieDetails movies={MoviesData} /> 
          </Route>
          <Route path="/">
            <MovieList movies={MoviesData} /> 
          </Route> */}
        <Route path='/movie/:id' element={<MovieDetails movies={MoviesData}/>}/>
        <Route path="/" element={<MovieList movies={MoviesData} />} />
      </>
    </Routes>

   
    </div>
  );
}

export default App;
