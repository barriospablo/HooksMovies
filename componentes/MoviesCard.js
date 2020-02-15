import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { film } = props;
  return (
    <div>
      <img src={film.Poster} />

      <Link to={{ pathname: `/detalle/${film.imdbID}` }}>
        <h5>{film.Title}</h5>
      </Link>
    </div>
  );
}

export default MovieCard;
