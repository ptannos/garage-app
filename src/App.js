import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import Routes from "./Routes";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes />
        </div>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
