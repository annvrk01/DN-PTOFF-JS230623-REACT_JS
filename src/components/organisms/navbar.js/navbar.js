import React from "react";import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Row, Col,Form, Button} from 'react-bootstrap/';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBarHome = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/*<Navbar.Brand href="#home">Student management</Navbar.Brand>*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
           {/* <Nav.Link as={Link} to='/trangchu'>TrangChu</Nav.Link>
            <Nav.Link as={Link} to='/student'>Student</Nav.Link> */}
            <Nav.Link as={Link} to='/user'>Quản Lí User</Nav.Link>
            <Nav.Link as={Link} to='/sanpham'>Quản Lí Sản Phẩm </Nav.Link>
            <Nav.Link as={Link} to='/donhang'>Quản Lí Đơn hàng</Nav.Link>
            <Nav.Link as={Link} to='/lienhe'>Quản Lí Liên Hệ</Nav.Link>

          </Nav>
        </Navbar.Collapse>

        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>

          <Col xs="auto">
            <Button type="submit">Login</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  );
}

export default NavBarHome;