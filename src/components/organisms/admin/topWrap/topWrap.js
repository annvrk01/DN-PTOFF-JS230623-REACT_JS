import React from "react";
import "react-bootstrap";
import Logo from "./../images/logo.png"
import avatar from "./../images/avatar.png";
import { Dropdown } from "react-bootstrap";

export default class TopWrap extends React.Component {
  render() {
    return (
      <div className="container-fluid headerWrap">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 col-xl-2 text-center text-sm-left ">
            <div className="row">
              <img src={Logo} className="logo" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 topRight text-right">
            <Dropdown>
              <Dropdown.Toggle variant="username" id="dropdown-basic">
                <img src={avatar} className="avatar" />{" "}
                <span className="avatar_text">UserName</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}

