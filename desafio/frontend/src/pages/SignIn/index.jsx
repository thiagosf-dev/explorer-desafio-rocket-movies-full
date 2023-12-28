import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Button } from "./../../components/Button/index";
import { Input } from "./../../components/Input/index";
import { BackgroundImg, Container, Form } from "./styles";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login!</h2>

        <Input
          type={`text`}
          placeholder={`Informe o seu e-mail...`}
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type={`password`}
          placeholder={`Informe o sua senha...`}
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={`Entrar`} onClick={handleSignIn} />

        <Link to={`/register`}>{`Criar conta`}</Link>
      </Form>

      <BackgroundImg />
    </Container>
  );
}
