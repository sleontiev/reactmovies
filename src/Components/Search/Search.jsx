import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {

  const [search, setSearch] = useState('');
  const [filter, setMovieFilter] = useState('all');

  const handleKey = (e) => {
    if (e.key === "Enter") {
      props.searchMovie(search, filter);
    }
  };

  const setFilter = (e) => {
    setMovieFilter(e.target.value);
    props.searchMovie(search, e.target.value);
  };

    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper grey darken-4">
            <div className="input-field">
              <input
                id="search"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
                required
              />
              <label className="label-icon" htmlFor="search">
                <i
                  onClick={() => props.searchMovie(search, filter)}
                  className="material-icons search-movie"
                >
                  search
                </i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </div>
        </nav>
        <div className="movie-filter">
          <p>
            <label>
              <input
                className="with-gap"
                name="filter"
                type="radio"
                value="all"
                onChange={setFilter}
                checked={filter === 'all'}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="filter"
                type="radio"
                value="movie"
                onChange={setFilter}
                checked={filter === 'movie'}
              />
              <span>Films</span>
            </label>
          </p>
          <p>
            <label>
              <input
                className="with-gap"
                name="filter"
                type="radio"
                value="series"
                onChange={setFilter}
                checked={filter === 'series'}
              />
              <span>TV Series</span>
            </label>
          </p>
        </div>
      </React.Fragment>
    );
  }

export { Search };
