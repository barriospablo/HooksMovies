import React, { useState, useEffect } from "react";
import MovieCard from "./MoviesCard";

function Movie() {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");
  //   const [movie, setMovie] = useState();

  const url = `http://www.omdbapi.com/?s=batman&apikey=4d5a0105`; // Falta la query ${query}
  const handleInput = e => {
    let s = e.target.value;
    setQuery(s);
    console.log(query);
  };

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setMovie(data.Search);
      });
  }, []);
  return (
    <div>
      <form>
        <label>
          <strong>Search movie</strong>
        </label>
        <input
          type="text"
          id="query"
          className="form-control"
          placeholder="Search"
          onChange={handleInput}
        />
      </form>
      {movie.map(film => (
        <MovieCard film={film} key={film.imdbID} />
      ))}

      {/* {query.length < 4 ? (
        <div>Not results yet</div>
      ) : (
        <div>
          {movie.map(film => (
            <MovieCard film={film} key={film.imdbID} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default Movie;
