import { ModalProvider } from "./Modal/Modal";
import { OioProvider } from "./Oio/oio";
import { UserProvider } from "./User/User";

interface iChildren {
  children: React.ReactNode;
}

export const Providers = ({ children }: iChildren) => {
  return (
    <ModalProvider>
      <UserProvider>
        <OioProvider>{children}</OioProvider>
      </UserProvider>
    </ModalProvider>
  );
};
