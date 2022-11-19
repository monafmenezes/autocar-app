import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import AdminCard from "../../components/AdminCard";
import ModalForm from "../../components/ModalForm";
import ModalProfile from "../../components/ModalProfile";
import TableCars from "../../components/TableCars";
import { CarContext } from "../../providers/cars";
import { captalize } from "../../utils";

const Admin = () => {
  const { getCars, cars } = useContext(CarContext);
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [data, setData] = useState([]);
  const update = () => {
    setOpenUpdate(true);
  };
  const create = () => {
    setOpenCreate(true);
  };

  useEffect(() => {
    getCars();
  }, []);

  const handleCars = () => {
    const arr = [];
    cars.forEach((car) => {
      const item = {
        key: car.id,
        model: captalize(car.model),
        mark: captalize(car.mark),
        year: car.year,
        km: car.km,
        price: car.price,
      };
      arr.push(item);
    });
    setData(arr);
  };


  return (
    <>
      <div className="grid sm:grid-cols-1 sm:items-center lg:grid-cols-3 gap-1 lg:px-52 pt-20">
        <AdminCard type="Adicionar veículo" car execute={create} />
        <AdminCard
          type="Buscar veículos"
          car
          execute={handleCars}
          icon={<FaSearch size={30} color="#3374db" />}
        />
        <AdminCard
          type="Atualizar Perfil"
          execute={update}
          icon={<FaUserCircle size={30} color="#3374db" />}
        />
      </div>
      <ModalForm open={openCreate} setOpen={setOpenCreate} />
      <ModalProfile open={openUpdate} setOpen={setOpenUpdate} />
      <TableCars data={data} />
    </>
  );
};

export default Admin;
