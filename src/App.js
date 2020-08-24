import React, { Component } from "react";
import "./App.css";
import { Security, ImplicitCallback } from "@okta/okta-react";
import Login from "../src/components/auth/Login";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Home/Landing";
import Movie from "./components/Home/Movie";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import SignInWidget from "./components/auth/SignInWidget";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Security
            issuer="https://dev-640406.okta.com/oauth2/default"
            clientId="0oaqm3nxhI1QgjgAy4x6"
            redirectUri={window.location.origin + "/implicit/callback"}
            onAuthRequired={this.onAuthRequired}
            pkce={true}
          >
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Landing} />
              <Route
                path="/login"
                render={() => (
                  <SignInWidget issuer="https://dev-640406.okta.com/oauth2/default" />
                )}
              />
              <Route path="/implicit/callback" component={Landing} />
              <Route exact path="/movie/:id" component={Movie} />
              <div className="footer">
                <Footer />
              </div>
            </div>
          </Security>
        </Router>
      </Provider>
    );
  }
}

export default App;
