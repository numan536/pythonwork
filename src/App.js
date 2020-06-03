import React from "react";
import logo from "./logo.svg";
import "./style.css";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";
import Company from "./components/Company";
import Form from "antd/lib/form/Form";
import CompanyForm from "./components/CompanyForm";
import List from "./components/List";

class App extends React.Component {
  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <Router>
          {/* <h2 style={{ textAlign: 'center' }}>Login Here</h2> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Register{" "}
                </Link>
              </li>
              <li>
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/company"} className="nav-link">
                  Registercompany
                </Link>
              </li>
              <li>
                <Link to={"/list"} className="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/company" component={CompanyForm} />
            <Route path="/list" component={List} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
