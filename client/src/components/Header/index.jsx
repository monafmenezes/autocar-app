import { Link, useLocation } from "react-router-dom";
import Search from "antd/lib/transfer/search";
import { userContext } from "../../providers/User";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(userContext);
  let location = useLocation();
  console.log(location.pathname);
  return (
    <header>
      <div className=" w-full mx-auto p-4 px-10 flex justify-between items-center ">
        <h1 className="font-poppins text-xl">AutoCar</h1>

        <nav className="flex items-center justify-between w-2/4">
          <Link
            className={
              location.pathname === "/carros-usados"
                ? "text-sm font-semibold text-blue"
                : "text-sm font-semibold text-gray-200"
            }
            to="/carros-usados"
          >
            Comprar carro
          </Link>
          <Link
            className={
              location.pathname === "/vendas"
                ? "text-sm font-semibold text-blue"
                : "text-sm font-semibold text-gray-200"
            }
            to="/"
          >
            Vender carro
          </Link>
          <Link
            className={
              location.pathname === "/fale-conosco"
                ? "text-sm font-semibold text-blue"
                : "text-sm font-semibold text-gray-200"
            }
            to="/"
          >
            Fale conosco
          </Link>
          <Link
            className={
              location.pathname === "/about"
                ? "text-sm font-semibold text-blue"
                : "text-sm font-semibold text-gray-200"
            }
            to="/"
          >
            Sobre nós
          </Link>
          <Link
            className={
              location.pathname === "/admin"
                ? "text-sm font-semibold text-blue flex"
                : "text-sm font-semibold text-gray-200 flex"
            }
            to={user ? "/admin" : "/login-admin"}
          >
            <FaUserCircle size={20} className="mr-2" />{" "}
            {user ? user.name : "Admin Login"}
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
