import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(createActor)}
    </div>
  );
};

function createActor(actor){
  return <div key={actor.name}>
    <h3>{actor.name}</h3>
    <ul>
      {actor.movies.map(createMovie)}
    </ul>
  </div>
}

function createMovie(movie){
  return <li key={movie}>{movie}</li>
}

export default Actors;
