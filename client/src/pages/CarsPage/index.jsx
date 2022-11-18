import { BsFilter } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { CarContext } from "../../providers/cars";
import Card from "../../components/Card";
import { LoadingOutlined } from "@ant-design/icons";

const CarsPage = () => {
  const { getCars, cars } = useContext(CarContext);

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="px-14">
      <h4 className="text-gray-100 py-4">CARROS USADOS</h4>
      <nav className="flex">
        <span className="font-bold flex items-center mr-12 cursor-pointer">
          {" "}
          <BsFilter size={20} className="mr-2" />
          Mostrar filtros
        </span>
        <span className="text-gray-200 font-semibold  mr-6 cursor-pointer">
          Remover filtros
        </span>
        <span className="text-gray-200 font-semibold  mr-6 cursor-pointer">
          {cars && cars.length} Resultados
        </span>
      </nav>
      {cars ? (
        <div className="grid grid-cols-4 gap-4 mt-10">
          {cars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <LoadingOutlined className="" />
      )}
    </div>
  );
};

export default CarsPage;
