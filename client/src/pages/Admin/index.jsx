import { useState } from "react";
import { useContext } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import AdminCard from "../../components/AdminCard";
import ModalForm from "../../components/ModalForm";
import { CarContext } from "../../providers/cars";

const Admin = () => {
  const { creatCar } = useContext(CarContext);
  const [openCreate, setOpenCreate] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openGet, setOpenget] = useState(false);
  const update = () => {
    setOpenUpdate(true);
  };
  const create = () => {
    setOpenCreate(true);
  };
  const get = () => {
    setOpenget(true);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-1 px-52 pt-20">
        <AdminCard type="Adicionar veículo" car execute={create} />
        <AdminCard
          type="Buscar veículos"
          car
          execute={get}
          icon={<FaSearch size={30} color="#3374db" />}
        />
        <AdminCard
          type="Atualizar Perfil"
          execute={update}
          icon={<FaUserCircle size={30} color="#3374db" />}
        />
      </div>
      <ModalForm open={openCreate} setOpen={setOpenCreate} />
    </>
  );
};

export default Admin;
