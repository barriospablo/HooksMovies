import React, { useState, useEffect } from "react";
import MovieCard from "./MoviesCard";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  //   const [movie, setMovie] = useState();

  const url = `http://www.omdbapi.com/?s=${query}&apikey=4d5a0105`; // Falta la query ${query}
  const handleInput = e => {
    let s = e.target.value;
    setQuery(s);
  };
  function callAPI() {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setMovie(data.Search);
      });
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="container">
      <form className="mb-4" onSubmit={callAPI()}>
        <h1 className="text-center display-4">Search a Movie</h1>
        {/* <strong>Search a movie</strong> */}

        <input
          type="text"
          id="query"
          className="form-control"
          placeholder="Search"
          onChange={handleInput}
        />
      </form>
      <div>
        {movie == undefined ? (
          <div className="text-center">Not results yet</div>
        ) : (
          movie.map(film => <MovieCard film={film} key={film.imdbID} />)
        )}
      </div>
    </div>
  );
}

export default Movie;
