import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "antd/lib/transfer/search";
import { userContext } from "../../providers/User";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import authService from "../../Auth";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

const Header = () => {
  const { user, getUser, setUser } = useContext(userContext);
 
  const getProfile = async () => {
    const token = authService.getLoggedUser();
    if (!token) return;
    const { sub } = jwt_decode(token);
    const res = await getUser(sub, token);
    setUser(res.data);
    return user;
  };

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    getProfile();
  }, []);
  let location = useLocation();

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
                ? "text-sm hidden md:flex font-semibold text-blue"
                : "text-sm hidden md:flex font-semibold text-gray-200"
            }
            to="/"
          >
            Vender carro
          </Link>
          <Link
            className={
              location.pathname === "/fale-conosco"
                ? "text-sm hidden md:flex font-semibold text-blue"
                : "text-sm  hidden md:flex font-semibold text-gray-200"
            }
            to="/"
          >
            Fale conosco
          </Link>
          <Link
            className={
              location.pathname === "/about"
                ? "text-sm hidden md:flex font-semibold text-blue"
                : "text-sm hidden md:flex font-semibold text-gray-200"
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
          {user && (
            <IoMdLogOut
              className="cursor-pointer hover:scale-105"
              color="#df4759"
              onClick={logout}
              size={20}
            />
          )}
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
