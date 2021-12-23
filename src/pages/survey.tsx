import { h } from "preact";
import { Wrapper } from "../components/wrapper";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { SurveyComponent } from "../components/surveyComponent";
import { TitleCard } from "../components/titleCard";

const Survey = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Wrapper>
      <div class="box">
        <TitleCard title="Prospect Survey" />
        <SurveyComponent />
      </div>
    </Wrapper>
  );
};

export default withAuthenticationRequired(Survey, {
  onRedirecting: () => <div>Redirecting to login page...</div>,
});
