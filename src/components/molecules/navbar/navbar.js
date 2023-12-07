import React, { useState } from "react"; import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Row, Col, Form, Button } from 'react-bootstrap/';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { hadLoggedIn } from "../../../util/Authen";
import AccountHambuger from "../account/hambuger";
import LoginRegister from "../account";

function NavBarHome() {

  const [isSignupContainerBeingShown, setShowSignupContainer] = useState(false);
  const [isLoginDropdownBeingShown, setShowLoginDropdown] = useState(false);

  function toggleLoginDropdown() {
    setShowLoginDropdown(!isLoginDropdownBeingShown);
    console.log("toggleLoginDropdown: " + isLoginDropdownBeingShown);
  }

  function validateDidLogin(target){
    if(!hadLoggedIn() ){
      target.preventDefault();
    }
  }
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-body-tertiary">
        <br />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/admin/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/admin/Services'>Services</Nav.Link>
              <Nav.Link as={Link} to='/admin/LineChart'>LineChart</Nav.Link>
              <Nav.Link as={Link} to='/admin/PieChart'>PieChart</Nav.Link>
              <Nav.Link as={Link} to='/admin/Search'>Search</Nav.Link>
              <Nav.Link as={Link} to='/admin/AddUser' onClick={validateDidLogin}>User management</Nav.Link>
              <Nav.Link as={Link} to='/admin/AddProduct' onClick={validateDidLogin}>Product management</Nav.Link>
              <Nav.Link as={Link} to='/admin/AddCart' onClick={validateDidLogin}>Cart management</Nav.Link>              
            </Nav>
          </Navbar.Collapse>

          {
            hadLoggedIn() 
            ? <AccountHambuger/>
            : <LoginRegister />
          }          

        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHome;