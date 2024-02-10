import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          http://www.omdbapi.com/?i=${id}&apikey=ceb74058
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(new Error(data.Error));
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h2>Movie Details</h2>
      {error ? (
        <p>Error: {error.message}</p>
      ) : movie ? (
        <div>
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <p>Director: {movie.Director}</p>
          <p>Plot: {movie.Plot}</p>
          {/* Display other movie details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;