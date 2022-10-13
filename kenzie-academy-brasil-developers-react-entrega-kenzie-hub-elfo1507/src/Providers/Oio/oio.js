import { createContext, useState } from "react";

export const OioContext = createContext();

export const OioProvider = ({ children }) => {
  const [oio, setOio] = useState("password");
  return (
    <OioContext.Provider value={{ oio, setOio }}>
      {children}
    </OioContext.Provider>
  );
};
