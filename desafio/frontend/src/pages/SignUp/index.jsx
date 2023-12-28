import { useState } from "react";
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/index";
import { Input } from "../../components/Input/index";
import { api } from "../../service/api";
import { BackgroundImg, Container, Form } from "./styles";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  function clearInputs() {
    setEmail(``);
    setName(``);
    setPassword(``);
  }

  function handleSignUp() {
    if (!name || !email || !password)
      return alert(`Todos os campos devem ser preenchidos.`);

    api
      .post(`/users`, { email, name, password })
      .then(() => {
        setEmail(``);
        setName(``);
        setPassword(``);
        alert(`Usuário cadastrado com sucesso`);
        clearInputs();
        return navigate(`/`);
      })
      .catch((error) => {
        if (error.response) {
          return alert(`ERROR: ${error.response.data.message}`);
        }

        return alert(`ERROR: Não foi possível executar a operação solicitada.`);
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir..</p>

        <h2>Crie sua conta!</h2>

        <Input
          type={`text`}
          placeholder={`Informe o seu nome...`}
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type={`text`}
          placeholder={`Informe o seu e-mail...`}
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type={`password`}
          placeholder={`Informe a sua senha...`}
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={`Cadastrar`} onClick={handleSignUp} />

        <Link to={`/`}>
          <FiArrowLeft />
          {`Voltar para o login`}
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  );
}
