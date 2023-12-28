/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { Star } from "../Star";
import { Tag } from "./../Tag/index";
import { Container } from "./styles";

export function Movies({ movies = [], ...props }) {
  const navigate = useNavigate();

  function handleClick(movieId) {
    navigate(`/details/${movieId}`);
  }

  return (
    <>
      {movies.map((movie) => (
        <Container
          key={movie.id}
          {...props}
          onClick={() => handleClick(movie.id)}
        >
          <h2>{movie.title || ``}</h2>

          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <Star key={index} isFilled={movie.rating > index} />
            ))}
          </div>

          <p>{movie.description}</p>

          <div className="tags">
            {movie.tags.map((tag, index) => (
              <Tag key={index} title={tag.name} />
            ))}
          </div>
        </Container>
      ))}
    </>
  );
}
