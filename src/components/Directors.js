import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((directors) => (
          <div key={directors.name}>
            <h3>{directors.name}</h3>
            <p>Movies:</p>
            <ul>
              {directors.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
              </ul>
          </div>
          
        ))}
    </div>

  )
}

export default Directors;
