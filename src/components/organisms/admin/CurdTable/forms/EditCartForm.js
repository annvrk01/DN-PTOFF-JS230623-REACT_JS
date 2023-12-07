import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";

const EditCartForm = props => {
  const [cart, setCart] = useState(props.selectedCart);

  useEffect(() => {
    setCart(props.selectedCart);
  }, [props.selectedCart]);
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCart({ ...cart, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateCart(cart.id, cart);
      }}
    >
      <Form.Group>
        <Form.Label>cartname</Form.Label>
        <Form.Control
          type="number"
          placeholder="title_text"
          name="title_text"
          value={cart.title_text || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="desc_text"
          value={cart.desc_text || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="0"
          name="price"
          value={cart.price || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Geometry Info</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter geometry info"
          name="geometry"
          value={cart.geometry || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <button className="btn btn-primary mr-2">Update cart</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditCartForm;
