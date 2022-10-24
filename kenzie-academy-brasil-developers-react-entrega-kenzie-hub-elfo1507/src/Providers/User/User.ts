import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instanceAuth } from "../../axios";

interface iChildren {
  children: React.ReactNode;
}

interface iTechs{
  title: string;
  status: string;
  id: string;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string;
  techs: iTechs[];
  works: string[];
}

interface iUserContext {
  user: iUser;
  setUser: React.Dispatch<React.SetStateAction<iUser>>;
  techs: iTechs[];
  setTechs: React.Dispatch<React.SetStateAction<iTechs[]>>;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser>();
  const [techs, setTechs] = useState<iTechs[]>();
  const [isOk, setOk] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ user, setUser, techs, setTechs }}>
      {children}
    </UserContext.Provider>
  );
};
