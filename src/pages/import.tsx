import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { ImportComponent } from "../components/importComponent";
import { TitleCard } from "../components/titleCard";
import { Menu } from "../components/menu";

const ImportData = () => {
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
          {/* <TitleCard title="Welcome to Helen" /> */}
          <ImportComponent />
        </div>
      </div>
    </Wrapper>
  );
};

export default withAuthenticationRequired(ImportData, {
  onRedirecting: () => <div>Redirecting to login page...</div>,
});
