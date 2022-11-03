import React, { createContext, useState } from "react";
import {
  Ref,
  Message,
  MultipleFieldErrors,
  DeepMap,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instanceNoAuth } from "../../axios";

interface iChildren {
  children: React.ReactNode;
}

interface iRegister {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

interface iTechs {
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
  onSubmitForm: (dados: iData) => void;
}

export interface iData {
  name: string;
  email: string;
  password: string;
  confPass: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface FieldError {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
}

export type FieldErrors<TFieldValues extends iData = iData> = DeepMap<
  TFieldValues,
  FieldError
>;

export interface iAxios<i> {
  data: i;
}

export interface iResponse {
  user: iUser;
  token: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<iUser>({} as iUser);
  const [techs, setTechs] = useState<iTechs[]>([]);

  const navigate = useNavigate();

  const onSubmitForm = (dados: iData) => {
    instanceNoAuth
      .post<iAxios<iRegister>>("/users", {
        name: dados.name,
        email: dados.email,
        password: dados.password,
        bio: dados.bio,
        contact: dados.contact,
        course_module: dados.course_module,
      })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!", { theme: "dark" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao cadastrar, favor tentar novamente", {
          theme: "dark",
        });
      });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, techs, setTechs, onSubmitForm }}
    >
      {children}
    </UserContext.Provider>
  );
};
