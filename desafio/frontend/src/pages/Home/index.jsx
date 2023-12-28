import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Header } from "./../../components/Header/index";
import { Movies } from "./../../components/Movies/index";
import { api } from "./../../service/api";
import { Container, Content, Section } from "./styles";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get(`http://localhost:3333/movie_notes?title=${''}`);
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTags();
  }, []);

  return (
    <Container className="teste">
      <Header />

      <Section>
        <h1>{`Meus filmes`}</h1>
        <Link to={`/new`}>
          <FiPlus />
          Adicionar filme
        </Link>
      </Section>

      <Content>
        <Movies movies={movies} />
      </Content>
    </Container>
  );
}
