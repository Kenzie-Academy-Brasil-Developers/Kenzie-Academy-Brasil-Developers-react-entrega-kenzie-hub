import { createContext, useState } from "react";

interface iChildren {
  children: React.ReactNode;
}

interface iModal {
  modalStatus: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as iModal);

export const ModalProvider = ({ children }: iChildren) => {
  const [modalStatus, setModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modalStatus, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
