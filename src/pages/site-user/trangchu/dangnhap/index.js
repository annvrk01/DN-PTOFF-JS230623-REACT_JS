import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./index.css";

function Login() { 
  return (
    <div className="login-page">
        <div className="login-form-container">
             <h1 className="title">Login</h1>

      <Form style={{background:"#ececec;", height: "202px",
            width: "401px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{
            height: "35px",
            width: "400px"
          }} />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{
          height: "100px",
          width: "400px"
        }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" href="http://localhost:3000/" >
          Login
        </Button>
        <Button variant="primary" type="submit" href="http://localhost:3000/dangki">
          Register
        </Button>
      </Form>
      </div>
    </div>

  );
}

export default Login;