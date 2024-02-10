import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, handleMovieSelect }) => {
  const handleClick = (id) => {
    handleMovieSelect(id);
  };

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <Link key={movie.imdbID} to={/movie/${movie.imdbID}}>
            <li onClick={() => handleClick(movie.imdbID)}>{movie.Title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;