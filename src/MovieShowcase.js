import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map(movie => {
      return (
        <MovieCard
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}

MovieCard.defaultProps = {
  title: "Unknown",
  IMDBRating: null,
  genres: ["No Genre(s) Found"],
  poster: "default"
};
