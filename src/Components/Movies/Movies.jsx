import React from "react";
import { Movie } from "../Movie/Movie";
import "./Movies.css";

const Movies = (props) => {
  const { movies = [], changeBg } = props;
  console.log(movies);
  return (
    <React.Fragment>
      {movies.length ? (
        <div className="movie-container">
          {movies.map((movie) => {
            console.log(movie);
            return (
              <Movie
                key={movie.imdbID}
                changeBg={() => {
                  changeBg(movie.imdbID);
                }}
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
              />
            );
          })}
        </div>
      ) : (
        <h4
          style={{
            color: "#c2c2c2",
            textAlign: "center",
          }}
        >
          Not Found
        </h4>
      )}
    </React.Fragment>
  );
};

export { Movies };
