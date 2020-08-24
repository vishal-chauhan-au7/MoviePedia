import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-header">
              <Link
                className="navbar-brand text-white text lg brand-text"
                to="/"
              >
                MoviePedia
              </Link>
            </div>
            <ul className="navbar-nav ml-auto text-light d-inline-block">
              <li className="nav-item d-inline-block mr-4">
                <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                <Link
                  className="fa fa-sign-out fa-3x"
                  aria-hidden="true"
                  to="/"
                ></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
