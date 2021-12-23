import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Profile } from "../components/profile";
import { Menu } from "../components/menu";
import { TitleCard } from "../components/titleCard";

const Dashboard = () => {
  console.log(import.meta.env.SNOWPACK_PUBLIC_API_URL);

  return (
    <Wrapper>
      <div className="columns">
        <div class="column is-3">
          <Menu />
        </div>

        <div className="column is-9">
          <TitleCard title="Welcome to Helen" />
          <Profile />
        </div>
      </div>
    </Wrapper>
  );
};

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <div>Redirecting to login page...</div>,
});
