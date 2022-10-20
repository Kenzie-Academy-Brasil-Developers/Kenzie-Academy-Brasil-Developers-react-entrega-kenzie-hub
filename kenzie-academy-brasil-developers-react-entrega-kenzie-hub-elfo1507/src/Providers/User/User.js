import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instanceAuth } from "../../axios";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [techs, setTechs] = useState([]);
  const [isOk, setOk] = useState(false);
  const navigate = useNavigate();
  function autoLogin(){
    instanceAuth
      .get("/profile")
      .then((res) => {
        setUser(res.data.user);
        setOk(true);
      })
      .catch(() => setOk(false));
  };
  function isLogged() {
    autoLogin();
    isOk ? navigate("/dashboard") : navigate("/");
  }
  return (
    <UserContext.Provider
      value={{ user, setUser, techs, setTechs, isOk, autoLogin, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
