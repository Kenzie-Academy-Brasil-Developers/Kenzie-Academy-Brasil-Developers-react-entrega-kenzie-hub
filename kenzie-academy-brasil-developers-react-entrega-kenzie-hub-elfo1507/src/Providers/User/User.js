import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { instanceAuth } from "../../axios";
// import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [techs, setTechs] = useState(user?.techs);
  // const navigate = useNavigate();
  
  // Tive problemas aqui, vou resolver com /pergunta
  // const autoLogin = () => {
  //   instanceAuth.get("/profile").then((res) => {
  //     setUser(res.data.user);
  //     navigate("/dashboard");
  //   });
  // };

  // const verificarToken = () => {
  //   instanceAuth
  //     .get("/profile")
  //     .then((res) => {
  //       setUser(res.data.user);
  //     })
  //     .catch(() => navigate("/"));
  // };

  return (
    <UserContext.Provider
      value={{ user, setUser, techs, setTechs }}
    >
      {children}
    </UserContext.Provider>
  );
};
