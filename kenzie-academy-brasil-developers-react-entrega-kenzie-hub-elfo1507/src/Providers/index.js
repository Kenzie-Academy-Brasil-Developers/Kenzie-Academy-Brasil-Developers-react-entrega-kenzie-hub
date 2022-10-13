import { OioProvider } from "./Oio/oio";
import { UserContext, UserProvider } from "./User/User";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <OioProvider>{children}</OioProvider>
    </UserProvider>
  );
};
