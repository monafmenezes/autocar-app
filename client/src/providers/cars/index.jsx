import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { orderBy } from "../../utils";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(null);
  const [load, setLoad] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const createCar = (formData) => {
    api
      .post("car", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getCars();
        toast.success("Deu tudo certo!");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado.");
      });
  };

  const getCars = () => {
    api
      .get("car")
      .then((res) => {
        setCars(orderBy(res.data));
        setLoad(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteCar = ({ id }) => {
    api
      .delete(`car/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Deu tudo certo");
        getCars();
      })
      .catch(() => toast.error("Algo deu errado!"));
  };

  const updateCar = (formData, id) => {
    api
      .patch(`car/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Deu tudo certo");
        getCars();
      })
      .catch(() => toast.error("Algo deu errado!"));
  };

  return (
    <CarContext.Provider
      value={{ cars, getCars, load, createCar, deleteCar, updateCar }}
    >
      {children}
    </CarContext.Provider>
  );
};
