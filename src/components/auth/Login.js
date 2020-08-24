import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInWidget from "./SignInWidget";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class SignInWidget extends Component {
    render() {
      if (this.props.authState.isPending) {
        return <div>Loading...</div>;
      }
      return this.props.authState.isAuthenticated ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <SignInWidget issuer={this.props.issuer} />
      );
    }
  }
);
