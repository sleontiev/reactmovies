import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filter: "all",
    };
  }

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.filter);
    }
  };

  setFilter = (e) => {
    this.setState(() => ({
      filter: e.target.value,
    }), () => {
        this.props.searchMovie(this.state.search, this.state.filter);
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper grey darken-4">
            <div className="input-field">
              <input
                id="search"
                type="search"
                onChange={(e) =>
                  this.setState({
                    search: e.target.value,
                  })
                }
                onKeyDown={this.handleKey}
                required
              />
              <label className="label-icon" htmlFor="search">
                <i
                  onClick={this.props.searchMovie.bind(
                    this,
                    this.state.search,
                    this.state.filter
                  )}
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
                onChange={this.setFilter}
                checked={this.state.filter === 'all'}
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
                onChange={this.setFilter}
                checked={this.state.filter === 'movie'}
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
                onChange={this.setFilter}
                checked={this.state.filter === 'series'}
              />
              <span>TV Series</span>
            </label>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export { Search };
