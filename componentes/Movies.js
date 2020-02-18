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
        <label className="m-4">
          <strong>Search a movie</strong>
        </label>
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
          <div>Not results yet</div>
        ) : (
          movie.map(film => <MovieCard film={film} key={film.imdbID} />)
        )}
      </div>
    </div>
  );
}

export default Movie;
