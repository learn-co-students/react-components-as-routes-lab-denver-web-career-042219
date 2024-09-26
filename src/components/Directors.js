import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(createDirector)}
    </div>
  );
}

function createDirector(director){
  return <div key={director.name}>
    <h3>{director.name}</h3>
    <ul>
      {director.movies.map(createMovie)}
    </ul>
  </div>
}

function createMovie(movie){
  return <li key={movie}>{movie}</li>
}

export default Directors
