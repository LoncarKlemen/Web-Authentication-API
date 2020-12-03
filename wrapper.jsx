import React, { Component } from "react";
import BasicForm from "./form";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <h1>Web Authentication API</h1>
        <p>Specification:</p>
        <a href="https://www.w3.org/TR/webauthn/" target="_blank">
          https://www.w3.org/TR/webauthn/
        </a>
        <BasicForm />
      </div>
    );
  }
}
export default Wrapper;
