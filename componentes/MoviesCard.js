import React from "react";
import { Link } from "react-router-dom";
import "../styles/MoviesCard.css";

function MovieCard(props) {
  const { film } = props;
  return (
    <div className="card m-4">
      <img className="card-img-top" src={film.Poster} />
      <div className="card-body d-flex flex-wrap-reverse">
        <Link to={{ pathname: `/detalle/${film.imdbID}` }}>
          <h5 className="card-text">{film.Title}</h5>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
