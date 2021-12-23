import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Menu } from "../components/menu";
import { TitleCard } from "../components/titleCard";
import { AnalysisComponent } from "../components/analysisComponent";

const Analysis = () => {
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
          <TitleCard title="Campaign Analysis" />
          <AnalysisComponent />
        </div>
      </div>
    </Wrapper>
  );
};

export default withAuthenticationRequired(Analysis, {
  onRedirecting: () => <div>Redirecting to login page...</div>,
});
