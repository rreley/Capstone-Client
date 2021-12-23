import { h, render } from "preact";
import "preact/debug";
import { App, history } from "./app";
import { Auth0Provider, AppState } from "@auth0/auth0-react";
// import history from "./utils/";

// location.pathname = "/dashboard";

// window.location.pathname = "/dashboard";

const onRedirectCallback = (appState: AppState) => {
  // If using a Hash Router, you need to use window.history.replaceState to
  // remove the `code` and `state` query parameters from the callback url.
  // window.history.replaceState({}, document.title, window.location.pathname);
  history.replace((appState && appState.returnTo) || window.location.pathname);
};

render(
  <Auth0Provider
    domain="brogrammers.us.auth0.com"
    clientId="l6jQdAoZpuBU0ESWggdTnSlcnnyw7dCV"
    redirectUri={window.location.origin}
    audience="https://brogrammers.us.auth0.com/api/v2/"
    scope="read:messages read:current_user update:current_user_metadata"
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,

  document.body
);
