import React from "react";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import axios from "axios";
import List from "./List";
class CompanyForm extends React.Component {
  state = {
    name: "",
    companyname: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
  };

  handlechangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handlechangeCompanyName = (e) => {
    this.setState({
      companyname: e.target.value,
    });
  };
  handlechangeAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  handlechangeAddress2 = (e) => {
    this.setState({
      address2: e.target.value,
    });
  };
  handlechangeCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handlechangeZip = (e) => {
    this.setState({
      zip: e.target.value,
    });
  };

  handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/postcompanies2", {
      name: this.state.name,
      companyname: this.state.companyname,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      zip: this.state.zip,
    });
    this.setState({
      name: "",
      companyname: "",
      address: "",
      address2: "",
      city: "",
      zip: "",
    });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={this.handlesubmit} method="post">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={this.state.name}
                      onChange={this.handlechangeName}
                      type="name"
                      placeholder="Enter Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridText">
                    <Form.Label>CompanyName</Form.Label>
                    <Form.Control
                      value={this.state.companyname}
                      onChange={this.handlechangeCompanyName}
                      type="text"
                      placeholder="Company Name"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={this.state.address}
                    onChange={this.handlechangeAddress}
                    placeholder="Address"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    value={this.state.address2}
                    onChange={this.handlechangeAddress2}
                    placeholder="Apartment, studio, or floor"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      value={this.state.city}
                      onChange={this.handlechangeCity}
                    />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group> */}

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      value={this.state.zip}
                      onChange={this.handlechangeZip}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button
                  onClick={this.handlesubmit}
                  variant="primary"
                  type="submit"
                >
                  Save
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <div>
          <Container className="mt-4">
            <List />
          </Container>
        </div>
      </div>
    );
  }
}

export default CompanyForm;
