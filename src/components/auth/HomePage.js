import React, { Component } from "react";

export default class HomePage extends Component {
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
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
