import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

class List extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/getcompanies");
    console.log("res.data", res.data);
    this.setState({
      data: res.data.companies.map((item) => JSON.parse(item)),
    });
  }
  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company Name</th>
              <th>Address</th>
              <th>Address2</th>
              <th>City</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.companyname}</td>
                <td>{item.address}</td>
                <td>{item.address2}</td>
                <td>{item.city}</td>
                <td>{item.zip}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default List;
