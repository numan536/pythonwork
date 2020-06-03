import React from "react";
import axios from "axios";

class Company extends React.Component {
  state = {
    name: "",
    address: "",
    phone: "",
    location: "",
  };

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };
  handleChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleChangeLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/postcompanies", {
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      location: this.state.location,
    });
    console.log("res.data", res.data);
    this.setState({
      name: "",
      address: "",
      phone: "",
      location: "",
    });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <div className="login-form">
          <form method="post">
            <h2 className="text-center">Create Company</h2>
            <div className="form-group">
              <input
                value={this.state.name}
                onChange={this.handleChangeName}
                type="text"
                className="form-control"
                placeholder="Name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.address}
                onChange={this.handleChangeAddress}
                type="text"
                className="form-control"
                placeholder="Address"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.phone}
                onChange={this.handleChangePhone}
                type="text"
                className="form-control"
                placeholder="Phone"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.location}
                onChange={this.handleChangeLocation}
                type="password"
                className="form-control"
                placeholder="Location"
                required="required"
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-primary btn-block"
              >
                Log in
              </button>
            </div>
            <div className="clearfix">
              <label className="pull-left checkbox-inline">
                <input type="checkbox" /> Remember me{" "}
              </label>
              {/* <a href="#" className="pull-right">Forgot Password?</a> */}
            </div>
          </form>
        </div>
        {/* <Row>
                    <Col>
                        <Register />
                    </Col>
                </Row> */}
      </div>
    );
  }
}

export default Company;
