import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { Input } from "../Input";
import { Container, Profile, Search } from "./styles";

export function Header() {
  const navigate = useNavigate();

  const { user, signOut } = useAuth();
  const [userAvatar, setUserAvatar] = useState(avatarPlaceholder);

  function handleSignOut() {
		if (confirm(`Tem certeza que deseja sair da aplicação?`)) {
			navigate(`/`);
      signOut();
      return;
    }

    return;
  }

  useEffect(() => {
    setUserAvatar(
      user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder
    );
  }, [user.avatar]);

  return (
    <Container>
      <h1>RocketMovies 🎬</h1>

      <Search>
        <Input placeholder={`Pesquisar pelo título...`} />
      </Search>

      <Profile to={`/profile`}>
        <div>
          <Link to={`/profile`}>{user.name}</Link>
          <button onClick={handleSignOut}>Sair</button>
        </div>

        <img src={userAvatar} />
      </Profile>
    </Container>
  );
}
