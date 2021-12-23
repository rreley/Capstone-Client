import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { Greet } from "../components/greet";

const Home = () => {
  return (
    <Wrapper>
      <Greet />
    </Wrapper>
  );
};

export { Home };
