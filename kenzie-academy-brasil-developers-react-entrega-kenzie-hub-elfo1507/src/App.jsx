import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/dashboard";
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/RegisterPage/registerPage";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { GlobalStyles } from "./styles/global";

function App() {
  const [oio, setOio] = useState("password");
  const [user, setUser] = useState();
  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<LoginPage setUser={setUser} oio={oio} setOio={setOio} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard user={user}/>}
        />
        <Route path="/register" element={<RegisterPage oio={oio} setOio={setOio} />} />
      </Routes>
    </div>
  );
}

export default App;
