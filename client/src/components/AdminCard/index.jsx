import { FaCar, FaPlusSquare } from "react-icons/fa";

const AdminCard = ({ type, execute, icon = null, car = false }) => {
  return (
    <div
      onClick={execute}
      className="rounded hover:scale-105 max-h-40 p-2 w-52 border-2 border-blue shadow-lg flex flex-col justify-around items-center cursor-pointer"
    >
      <h3 className="text-lg flex items-center text-blue">
        {type} {car && <FaCar className="ml-3" />}
      </h3>
      {icon ? icon : <FaPlusSquare color="#3374db" size={35} />}
    </div>
  );
};

export default AdminCard;
