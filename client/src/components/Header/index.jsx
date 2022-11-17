import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Search from "antd/lib/transfer/search";
import { userContext } from "../../providers/User";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(userContext);
  return (
    <header>
      <div className=" w-full mx-auto p-4 px-10 flex justify-between items-center ">
        <h1 className="font-poppins text-xl">AutoCar</h1>

        <nav className="flex items-center justify-between w-2/4">
          <Link className="text-sm font-semibold" to="/carros-usados">
            Comprar carro
          </Link>
          <Link className="text-sm font-semibold" to="/">
            Vender carro
          </Link>
          <Link className="text-sm font-semibold" to="/">
            Comprar carro
          </Link>
          <Link className="text-sm font-semibold" to="/">
            Sobre nós
          </Link>
          <Link className="flex font-semibold text-sm" to="/login-admin">
            <FaUserCircle size={20} className="mr-2" /> {user ? user.name :  'Admin Login'}
          </Link>
        </nav>
      </div>
      <div className="w-full bg-blue">
        <div className="w-3/5 mx-auto p-4">
            <Search placeholder="Busque por marca, ano, cor.." enterButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
