import { Component } from "react";
import { Movies } from "../../Components/Movies/Movies";
import { Preloader } from "../../Components/Preloader/Preloader";
import { Search } from "../../Components/Search/Search";
import "./Main.css";

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=8d1cc66c&s=Avengers`)
      .then((response) => response.json())
      .then(post => this.setState({
          movies: post.Search,
          loading: false,
      }))
  }

  changeBg = (id) => {
    const fillArr = this.state.movies.filter((item) => item.imdbID === id);
    document.body.style.backgroundImage = `url(${fillArr[0].Poster})`;
  };

  searchMovie = (movieName, movieType) => {
      this.setState({
          loading: true,
      })
    fetch(
      `http://www.omdbapi.com/?apikey=8d1cc66c&s=${movieName}${
        movieType !== "all" ? `&type=${movieType}` : ""
      }`
    )
      .then((response) => response.json())
      .then(post => this.setState({
        movies: post.Search,
        loading: false,
    }))
  };

  render() {
    return (
      <main className="mainContainer">
        <Search searchMovie={this.searchMovie} />
        {!this.state.loading ? (
          <Movies
            changeBg={this.changeBg}
            movies={this.state.movies}
          />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export { Main };
