import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  const createUser = ({ name, email, password, isAdmin = false }) => {
    const params = { name, email, password, isAdmin };
    api
      .post("user", params)
      .then(() => {
        toast.success("Sucesso ao criar a contar");
      })
      .catch(() => {
        toast.error("Erro ao criar a conta, tente outro email");
      });
  };

  const getUser = async (id, token) => {
    return api.get(`user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const updateUser = (data, token, id) => {
    api
      .patch(`user/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>{
        toast.success("Deu tudo certo!")
      })
      .catch(() => toast.error("Algo deu errado!"));
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        createUser,
        getUser,
        admin,
        setAdmin,
        updateUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
