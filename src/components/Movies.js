import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(createMovie)}
    </div>
  );
};

function createMovie(movie){
  return <div key={movie.title}>
    <h3>{movie.title}</h3>
    <p>{movie.time}</p>
    <ul>
      {movie.genres.map(createGenre)}
    </ul>
  </div>
}

function createGenre(genre){
  return <li key={genre}>{genre}</li>
}

export default Movies;
