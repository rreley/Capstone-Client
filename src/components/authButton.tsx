import { h } from "preact";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./loginButton";
import { LogoutButton } from "./logoutButton";
import { Loading } from "./loading";

const AuthButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export { AuthButton };
