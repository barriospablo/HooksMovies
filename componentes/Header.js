import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/home">
      <div>
        <h1>Home</h1>
      </div>
    </Link>
  );
}

export default Header;
