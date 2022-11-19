
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import RoutesPages from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { CarProvider } from "./providers/cars";
import { UserProvider } from "./providers/User";

function App() {
  return (
    <div>
      <UserProvider>
        <CarProvider>
          <Header />
          <RoutesPages />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </CarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
