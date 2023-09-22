import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actors) => (
        <div key={actors.name}>
          <h3>{actors.name}</h3>
          <p>Movies:</p>
          <ul>
          {actors.movies.map((movies) => (
            <li key={movies}>
             {movies}
            </li>
          ))}
          </ul>
        </div>

      ))}
    </div>
  )
}

export default Actors;
