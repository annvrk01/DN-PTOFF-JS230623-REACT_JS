import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";

const AddUserForm = props => {

  const initialFormState = {
    username: "",
    firstname: "",
    lastname: "",
    email: ""
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('handleInputChange, name = ' + name + ', value = ', value);
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.username || !user.firstname || !user.lastname || !user.email){
          console.log('some thing was null, empty, equal 0 or undefined !', user);
          return;
        }

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstname"
          value={user.firstname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={user.lastname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <button className="btn btn-primary">Add new user</button>
    </form>
  );
};

export default AddUserForm;
