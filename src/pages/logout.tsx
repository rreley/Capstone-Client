import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { LogoutButton } from "../components/logoutButton";

const LogoutPage = () => {
  return (
    <Wrapper>
      <LogoutButton />
    </Wrapper>
  );
};

export { LogoutPage };
