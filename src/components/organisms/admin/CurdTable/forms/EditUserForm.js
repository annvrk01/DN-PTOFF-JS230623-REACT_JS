import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";

const EditUserForm = props => {
  const [user, setUser] = useState(props.selectedUser);

  useEffect(() => {
    setUser(props.selectedUser);
  }, [props.selectedUser]);
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <Form.Group>
        <Form.Label>username</Form.Label>
        <Form.Control
          type="text"
          placeholder="username"
          name="username"
          value={user.username || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstname"
          value={user.firstname || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={user.lastname || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={user.email || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <button className="btn btn-primary mr-2">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
