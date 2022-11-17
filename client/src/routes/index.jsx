import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import CarsPage from "../pages/CarsPage";
import LoginAdmin from "../pages/LoginAdmin";

const RoutesPages = () => {
    return (
      <Routes>
        <Route path="/carros-usados" element={<CarsPage />} />
        <Route path="/login-admin" element={<LoginAdmin/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    );
  };
  
  export default RoutesPages;