import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";
interface Props {
  movie: Movie;
}
interface Movie {
  backdrop_path?: string;
  name?: string;
  overview?: string;
}
function Hero({ movie }: Props) {
  return (
    // <HeroContainer background={movie?.backdrop_path}>
    <HeroContainer>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;
