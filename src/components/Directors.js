import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const displayDirectors = directors.map((director, index) => {
    return (
      <div key={index}>
        <p>Name: {director.name}</p>
        <p>Movies:</p>
        <ul>{director.movies.map(movie => {
            return (<li>{movie}</li>)
          })}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  );
}

export default Directors
