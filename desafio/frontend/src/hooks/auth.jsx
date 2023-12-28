/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    console.log("signIn()...");
    try {
      const response = await api.post(`/sessions`, { email, password });
			console.log('response :>> ', response);
      const { token, user } = response.data;
      localStorage.setItem(`@rocketmovies:user`, JSON.stringify(user));
      localStorage.setItem(`@rocketmovies:token`, JSON.stringify(token));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      console.error(error);

      if (error.response) {
        return alert(`ERROR: ${error.response.data.message}`);
      }

      return alert(`ERROR: Não foi possível executar a operação solicitada.`);
    }
  }

  function signOut() {
    localStorage.removeItem(`@rocketmovies:user`);
    localStorage.removeItem(`@rocketmovies:token`);
    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch(`/users/avatar`, fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put(`/users`, user);
      localStorage.setItem(`@rocketmovies:user`, JSON.stringify(user));
      setData({ user, token: data.token });
      alert(`Perfil atualizado com sucesso.`);
    } catch (error) {
      console.error(error);

      if (error.response) {
        return alert(`ERROR: ${error.response.data.message}`);
      }

      return alert(`ERROR: Não foi possível atualizar o perfil.`);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem(`@rocketmovies:token`);
    const user = localStorage.getItem(`@rocketmovies:user`);

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
