import { Table } from "antd";
import { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { CarContext } from "../../providers/cars";
import ModalForm from "../ModalForm";

const TableCars = ({ data }) => {
  const { cars, deleteCar } = useContext(CarContext);
  const [isModal, setIsModal] = useState(false);
  const [id, setId] = useState(null);

  const columns = [
    {
      title: "Modelo",
      width: 100,
      dataIndex: "model",
      key: "model",
      fixed: "left",
    },
    {
      title: "Marca",
      width: 100,
      dataIndex: "mark",
      key: "mark",
      fixed: "left",
    },
    {
      title: "Ano do veículo",
      width: 100,
      dataIndex: "year",
      key: "year",
      fixed: "left",
    },
    {
      title: "Km",
      width: 100,
      dataIndex: "km",
      key: "km",
      fixed: "left",
    },
    {
      title: "Preço",
      width: 100,
      dataIndex: "price",
      key: "price",
      fixed: "left",
    },
    {
      title: "Editar",
      key: "edit",
      fixed: "right",
      width: 50,
      render: (_, record) => (
        <SlPicture
          color="#ffcc00"
          size={18}
          onClick={() => handleEdit(record.key)}
          className="cursor-pointer hover:scale-110"
        />
      ),
    },
    {
      title: "Excluir",
      key: "edit",
      fixed: "right",
      width: 50,
      render: (_, record) => (
        <FaTrash
          onClick={() => handleDelete(record.key)}
          color="#df4759"
          size={18}
          className="cursor-pointer hover:scale-110"
        />
      ),
    },
  ];

  const handleDelete = (id) => {
    deleteCar({ id });
  };

  const handleEdit = (id) => {
    setIsModal(true);
    setId(id);
  };

  return (
    data && (
      <div className="w-4/5 mx-auto mt-5 p-4">
        <h2 className="font-poppins text-xl">Lista de Veículos</h2>
        <Table
          className="font-poppins"
          small
          bordered
          columns={columns}
          dataSource={data}
          scroll={{
            x: "auto",
          }}
        />
        <ModalForm open={isModal} setOpen={setIsModal} id={id} setId={setId} />
      </div>
    )
  );
};

export default TableCars;
