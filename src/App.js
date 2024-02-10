import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Movie from "./components/MovieDetails";
import { getMovieDetails } from "./api"; // Assuming you have an API function to fetch movie details

function App() {
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?s=movies&apikey=ceb74058"
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setOriginalMovies(data.Search);
      } else {
        console.error("Error fetching movies:", data.Error);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    if (query === "") {
      setMovies(originalMovies);
    } else {
      const response = await fetch(
        http://www.omdbapi.com/?s=${query}&apikey=ceb74058
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        console.error("Error searching movies:", data.Error);
        setMovies([]);
      }
    }
  };

  const handleMovieSelect = async (id) => {
    const movieDetails = await getMovieDetails(id); // Assuming getMovieDetails fetches details of a movie
    setSelectedMovie(movieDetails);
  };

  return (
    <Router>
      <div className="">
        <h1 className="text-center font-bold text-3xl">Movie Search Application</h1>
        <SearchBar handleSearch={handleSearch} />
        <MovieList movies={movies} handleMovieSelect={handleMovieSelect} />
        <Routes>
          <Route path="/movie/:id" element=<MovieDetails /> />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;