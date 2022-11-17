import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(null);
  const [load, setLoad] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const createCar = ({ km, mark, model, year, price, photo }) => {
  
    const params = { km, mark, model, year, price };
    const FormData = photo;

    api
      .post(
        "car",
        params,
        { env: { FormData } },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("Deu tudo certo!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado.");
      });
  };

  const getCars = () => {
    api
      .get("car")
      .then((res) => {
        setCars(res.data);
        setLoad(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CarContext.Provider value={{ cars, getCars, load, createCar }}>
      {children}
    </CarContext.Provider>
  );
};
