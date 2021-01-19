import React, { useEffect, useState } from "react";
import { Movies } from "../../Components/Movies/Movies";
import { Preloader } from "../../Components/Preloader/Preloader";
import { Search } from "../../Components/Search/Search";
import "./Main.css";

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const changeBg = (id) => {
    const fillArr = movies.filter((item) => item.imdbID === id);
    document.body.style.backgroundImage = `url(${fillArr[0].Poster})`;
  };

  const searchMovie = (movieName, movieType) => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=8d1cc66c&s=${movieName}${
        movieType !== "all" ? `&type=${movieType}` : ""
      }`
    )
      .then(response => response.json())
      .then(post => {
        setMovies(post.Search);
        setLoading(false)
      })
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=8d1cc66c&s=Avengers`)
      .then(response => response.json())
      .then(post => {
        setMovies(post.Search);
        setLoading(false)
      })
  }, [])

    return (
      <main className="mainContainer">
        <Search searchMovie={searchMovie} />
        {!loading ? (
          <Movies
            changeBg={changeBg}
            movies={movies}
          />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }

export { Main };
