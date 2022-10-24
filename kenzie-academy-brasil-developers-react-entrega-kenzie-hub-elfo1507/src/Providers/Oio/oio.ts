import { createContext, useState } from "react";

interface iOio {
  oio: string;
  setOio: React.Dispatch<React.SetStateAction<string>>;
}

interface iChildren {
  children: React.ReactNode;
}

export const OioContext = createContext({} as iOio);

export const OioProvider = ({ children }: iChildren) => {
  const [oio, setOio] = useState("password");
  return (
    <OioContext.Provider value={{ oio, setOio }}>
      {children}
    </OioContext.Provider>
  );
};
