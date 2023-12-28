import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { api } from "../../service/api";
import { Button } from "./../../components/Button/index";
import { Header } from "./../../components/Header/index";
import { Input } from "./../../components/Input/index";
import { NoteItem } from "./../../components/NoteItem/index";
import { Section } from "./../../components/Section/index";
import { Textarea } from "./../../components/Textarea/index";
import { ButtonGroup, Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState(``);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState(``);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState(``);

  function clearInputs() {
    setDescription(``);
    setRating(0);
    setTitle(``);
    setTags([]);
  }

  function handleSave() {
    console.log({ title, rating, description, tags: [...tags] });
    try {
      api.post(`/movie_notes`, {
        title,
        description,
        rating,
        tags: [...tags],
      });
      clearInputs();
    } catch (error) {
      console.error(error);
      return alert(
        `Não foi possível executar a operação solicitada, por favor tente novamente mais tarde.`
      );
    }
  }

  function handleAddTag() {
    if (newTag && newTag.trim() !== "") {
      setTags((prevState) => [...prevState, newTag.trim()]);
      setNewTag(``);
    }
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
    <Container>
      <Header />

      <Link to={`/`}>
        <FiArrowLeft />
        {`voltar`}
      </Link>

      <main>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <article>
            <Input
              placeholder={`Título...`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder={`Sua nota (0 a 5)...`}
              type={`number`}
              min={0}
              max={5}
              maxlenght={1}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </article>

          <Textarea
            placeholder={`Observações...`}
            value={description}
            onchange={(e) => setDescription(e.target.value)}
          />

          <Section title={`Marcadores`}>
            <div className="tags">
              {tags &&
                tags.length > 0 &&
                tags.map((tag) => (
                  <NoteItem
                    key={String(tag.id)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
              <NoteItem
                placeholder={`Novo marcador...`}
                isNew
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <ButtonGroup>
            <Button title={`Excluir filme`} />
            <Button title={`Salvar alterações`} onClick={handleSave} />
          </ButtonGroup>
        </Form>
      </main>
    </Container>
  );
}
