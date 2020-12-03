import React, { Component } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";

class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showRegInfo: false, regInfo: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.registerUser();
  }

  registerUser() {
    const args = {
      publicKey: {
        rp: { name: "Relying Party" },
        user: {
          id: new Uint8Array(16),
          name: this.state.value,
          displayName: "Display name",
        },
        challenge: new Uint8Array([
          // must be a cryptographically random number sent from a server
          0x8c,
          0x0a,
          0x26,
          0xff,
          0x22,
          0x91,
          0xc1,
          0xe9,
          0xb9,
          0x4e,
          0x2e,
          0x17,
          0x1a,
          0x98,
          0x6a,
          0x73,
          0x71,
          0x9d,
          0x43,
          0x48,
          0xd5,
          0xa7,
          0x6a,
          0x15,
          0x7e,
          0x38,
          0x94,
          0x52,
          0x77,
          0x97,
          0x0f,
          0xef,
        ]).buffer,
        pubKeyCredParams: [
          {
            type: "public-key",
            alg: -7,
          },
        ],
        attestation: "direct",
      },
    };

    navigator.credentials
      .create(args)
      .then((cred) => {
        this.setState({ showRegInfo: true, regInfo: cred });
        console.log(cred);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Group>
          <ButtonGroup aria-label="Basic example">
            <Button variant="info">LOGIN (NOT SUPPORTED YET)</Button>
            <Button variant="primary" type="submit">
              REGISTER
            </Button>
          </ButtonGroup>
        </Form>
        {this.state.showRegInfo && <h3>SUCESS! Look at console</h3>}
      </div>
    );
  }
}
export default BasicForm;
