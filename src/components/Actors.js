import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const displayActors = actors.map((actor, index) => {
    return (
      <div key={index}>
        <p>Name: {actor.name}</p>
        <p>Movies:</p>
        <ul>{actor.movies.map(movie => {
            return (<li>{movie}</li>)
          })}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  );
};

export default Actors;
