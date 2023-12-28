import { useState } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { Input } from "./../../components/Input/index";
import { Avatar, Container, Form } from "./styles";

export function Profile() {
  const navigate = useNavigate();

  const { user, updateProfile } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [name, setName] = useState(user.name ?? "");
  const [email, setEmail] = useState(user.email ?? "");
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdateProfile() {
    const updated = {
      name,
      email: email || email !== "" ? email : user.email,
      password: passwordNew,
      oldPassword: passwordOld,
    };

    const userUpdated = Object.assign(updated, user);
    await updateProfile({ user: userUpdated, avatarFile });
    clearInputs();
  }

  function clearInputs() {
    setPasswordNew(``);
    setPasswordOld(``);
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="foto so usuário" />

          <label htmlFor={`avatar`}>
            <FiCamera />

            <input id={`avatar`} type={`file`} onChange={handleChangeAvatar} />
          </label>
        </Avatar>

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
          placeholder={`Informe a sua senha atual...`}
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          type={`password`}
          placeholder={`Informe a sua nova senha...`}
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title={`Salvar`} onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
