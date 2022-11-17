import { Route, Routes } from "react-router-dom";
import CarsPage from "../pages/CarsPage";

const RoutesPages = () => {
    return (
      <Routes>
        <Route path="/carros-usados" element={<CarsPage />} />
      </Routes>
    );
  };
  
  export default RoutesPages;