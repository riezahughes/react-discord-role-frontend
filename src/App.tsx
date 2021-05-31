import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Route, useHistory } from "react-router-dom";
import dotenv from "dotenv";

import Dashboard from "./pages/Dashboard";
dotenv.config();

const oktaAuth = new OktaAuth({
  issuer: `https://${process.env.REACT_APP_OKTA_URL_BASE}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENTID,
  redirectUri: window.location.origin + "/login/callback",
});

const Home = () => <h1>Unprotected Route</h1>;

const App = () => {
  const history = useHistory();
  console.log(history);
  const restoreOriginalUri = async (
    _oktaAuth: OktaAuth,
    originalUri: string
  ) => {
    // console.log(originalUri, window.location.origin);
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Route path="/" exact={true} component={Home} />
      <SecureRoute path="/dashboard" component={Dashboard} />
      <Route path="/login/callback" component={LoginCallback} />
    </Security>
  );
};

export default App;
