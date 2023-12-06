import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";

const AddProductForm = props => {

  const initialFormState = {
    productname: "",
    firstname: "",
    lastname: "",
    email: ""
  };

  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('handleInputChange, name = ' + name + ', value = ', value);
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!product.productname || !product.firstname || !product.lastname || !product.email){
          console.log('some thing was null, empty, equal 0 or undefined !', product);
          return;
        }

        props.addProduct(product);
        setProduct(initialFormState);
      }}
    >
      <Form.Group>
        <Form.Label>Productname</Form.Label>
        <Form.Control
          type="text"
          placeholder="productname"
          name="productname"
          value={product.productname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstname"
          value={product.firstname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={product.lastname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={product.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <button className="btn btn-primary">Add new product</button>
    </form>
  );
};

export default AddProductForm;
