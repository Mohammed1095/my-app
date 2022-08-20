import React from "react";
import {
  MoviesContainer,
  MoviesPoster,
  MoviesRow,
  MoviesTitle,
} from "./Movies.styles";
interface Movie {
  id:string,
  poster_path:string,
  name:string
}
interface Props {
  title:string,
  movies:Movie[]
}
function Movies({ title, movies }:Props) {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies?.map((movie:Movie) => (
          <MoviesPoster
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;
