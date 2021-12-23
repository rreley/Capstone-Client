import { h } from "preact";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button class="button is-link" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export { LoginButton };
