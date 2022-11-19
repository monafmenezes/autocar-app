import { Route, Routes } from "react-router-dom";
import authService from "../Auth";
import Admin from "../pages/Admin";
import CarsPage from "../pages/CarsPage";
import LoginAdmin from "../pages/LoginAdmin";

const RoutesPages = () => {
  const token = authService.getLoggedUser();
  return (
    <Routes>
      <Route path="/carros-usados" element={<CarsPage />} />
      <Route path="/" element={<CarsPage />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/admin" element={<Admin token={token} />} />
    </Routes>
  );
};

export default RoutesPages;
