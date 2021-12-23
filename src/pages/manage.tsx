import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Menu } from "../components/menu";
import { TitleCard } from "../components/titleCard";

const Manage = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Wrapper>
      <div className="columns">
        <div class="column is-3">
          <Menu />
        </div>

        <div className="column is-9">
          <TitleCard title="Manage Users" />
          <h1>Manage Users</h1>
          <p>This should probably redirect to auth0's dashboard</p>
          <a href="https://manage.auth0.com/dashboard/us/brogrammers/users">
            User management dashboard can be found here.
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default withAuthenticationRequired(Manage, {
  onRedirecting: () => <div>Redirecting to login page...</div>,
});
