import { ModalProvider } from "./Modal/Modal";
import { OioProvider } from "./Oio/oio";
import { UserProvider } from "./User/User";

export const Providers = ({ children }) => {
  return (
    <ModalProvider>
      <UserProvider>
        <OioProvider>{children}</OioProvider>
      </UserProvider>
    </ModalProvider>
  );
};
