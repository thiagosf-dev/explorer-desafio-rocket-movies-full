import { useEffect, useState } from "react";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header/index.jsx";
import { Star } from "../../components/Star/index.jsx";
import { api } from "../../service/api.js";
import { Tag } from "./../../components/Tag/index";
import { Container, Content, Info, Tags, Title } from "./styles.js";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState({});

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      try {
        const responseMovies = await api.get(`/movie_notes/${params.id}`);
        setData(responseMovies.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNote();
  }, [params.id]);

  return (
    <Container>
      <Header />

      <Link onClick={handleBack}>
        <FiArrowLeft />
        {`Voltar`}
      </Link>

      <main>
        <Content>
          <Title>
            <h1>{data.title || ""}</h1>
            <div>
              {[...Array(5)].map((_, index) => (
                <Star key={index} isFilled={data.rating > index} />
              ))}
            </div>
          </Title>

          <Info>
            <img
              src="https://github.com/thiagosf-dev.png"
              alt="imagem do usuário"
            />
            <span>Por Thiago Soares Figueiredo</span>
            <FiClock />
            <span>23/05/22 às 08:00</span>
          </Info>

          {data.movieTags && data.movieTags.length > 0 && (
            <Tags>
              {data.movieTags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </Tags>
          )}

          <p>{data.description || ""}</p>
        </Content>
      </main>
    </Container>
  );
}
