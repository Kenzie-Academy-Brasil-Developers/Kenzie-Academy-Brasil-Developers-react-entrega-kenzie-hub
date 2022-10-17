import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/dashboard";
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/RegisterPage/registerPage";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/global";
import Verify from "./components/Verify";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Verify/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
