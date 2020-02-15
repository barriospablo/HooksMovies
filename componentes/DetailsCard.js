import React from "react";

function DetailsCard(props) {
  const { detail } = props;
  return (
    <div>
      <h5>{detail.Title}</h5>
      <h5>{detail.Year}</h5>
      <h5>{detail.Rated}</h5>
      <h5>{detail.Released}</h5>
      <h5>{detail.Runtime}</h5>
      <h5>{detail.Genre}</h5>
      <h5>{detail.Director}</h5>
      <h5>{detail.Writer}</h5>
    </div>
  );
}

export default DetailsCard;
