import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";

const EditProductForm = props => {
  const [product, setProduct] = useState(props.selectedProduct);

  useEffect(() => {
    setProduct(props.selectedProduct);
  }, [props.selectedProduct]);
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateProduct(product.id, product);
      }}
    >
      <Form.Group>
        <Form.Label>productname</Form.Label>
        <Form.Control
          type="number"
          placeholder="productname"
          name="productname"
          value={product.productname || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstname"
          value={product.firstname || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={product.lastname || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={product.email || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <button className="btn btn-primary mr-2">Update product</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
