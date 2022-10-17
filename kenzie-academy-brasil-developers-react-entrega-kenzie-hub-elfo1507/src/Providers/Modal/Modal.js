import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalStatus, setModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modalStatus, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
