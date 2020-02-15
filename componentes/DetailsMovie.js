import React, { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";

function DetailsMovie(props) {
  const { handle } = props.match.params;
  const [detail, setDetail] = useState([]);
  const urli = `http://www.omdbapi.com/?i=${handle}&apikey=4d5a0105`;
  useEffect(() => {
    fetch(urli)
      .then(data => data.json())
      .then(data => {
        setDetail(data);
      });
  }, []);
  return (
    <div>
      <DetailsCard detail={detail} />
    </div>
  );
}

export default DetailsMovie;
