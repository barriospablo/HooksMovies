import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/home">
      <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
        <a class="navbar-brand" href="#">
          React Movies
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Link>
  );
}

export default Header;
