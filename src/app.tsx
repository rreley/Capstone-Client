import { h } from "preact";
import { Router, Route } from "wouter-preact";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import { About } from "./pages/about";
import { Home } from "./pages/home";
import Dashboard from "./pages/dashboard";
import Prospect from "./pages/prospect";
import Survey from "./pages/survey";
import ImportData from "./pages/import";
import Manage from "./pages/manage";
import Analysis from "./pages/analysis";
import ExternalApi from "./pages/externalApi";
// import { NotFound } from "./pages/notFound";

import { createBrowserHistory } from "history";

const ProtectedRoute = ({ component, ...args }: any) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

// Use `createHashHistory` to use hash routing
export const history = createBrowserHistory();

const App = () => {
  return (
    <div class="app">
      {/*@ts-ignore*/}
      <Router history={history}>
        {/* <Route path="*" component={NotFound}></Route> */}
        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/prospect" component={Prospect} />
        <ProtectedRoute path="/survey" component={Survey} />
        <ProtectedRoute path="/import" component={ImportData} />
        <ProtectedRoute path="/manage" component={Manage} />
        <ProtectedRoute path="/analysis" component={Analysis} />
        <Route path="/external-api" component={ExternalApi} />
      </Router>
    </div>
  );
};

export { App };
