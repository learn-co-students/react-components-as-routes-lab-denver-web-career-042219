import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const displayMovies = movies.map((movie,index) => {
    return (
      <div key={index}>
        <p>Title: {movie.title}</p>
        <p>Time: {movie.time} min</p>
        <p>Genres:</p>
        <ul>{movie.genres.map(genre => {
           return (<li>{genre}</li>)
          })}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
};

export default Movies;
