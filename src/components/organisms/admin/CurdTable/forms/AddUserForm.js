import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";

const AddUserForm = props => {
  const initialFormState = {
    id: null,
    iduser: "",
    fname: "",
    lname: "",
    email: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.iduser || !user.fname || !user.lname || !user.email) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Group>
        <Form.Label>Employee Id</Form.Label>
        <Form.Control
          type="number"
          placeholder="Id"
          name="iduser"
          value={user.iduser}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="fname"
          value={user.fname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lname"
          value={user.lname}
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
