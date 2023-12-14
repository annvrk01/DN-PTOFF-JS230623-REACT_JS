import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";
import { cloneObj } from "../../../../../util/utils";

const EditProductForm = props => {
  const [product, setProduct] = useState(props.selectedProduct);
  const [showingCategories, setShowingCategories] = useState([]);

  useEffect(
    () => {
      //console.log("props.categories changed", props);
      if(!props.categories) return;
      setShowingCategories(cloneObj(props.categories));
    }
  , [props])

  const setProductCategoryId = (event) => {
    let newCategoryId = Number(event.target.value);
    if(product.categoryId === newCategoryId) {
      return;
    }

    product.categoryId = newCategoryId;
    console.log("newCategoryId ", product.categoryId);
    setProduct(cloneObj( product ));
  }

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
        <Form.Label>Productname</Form.Label>
        <Form.Control
          type="text"
          placeholder="title text"
          name="title_text"
          value={product.title_text}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="desc_text"
          value={product.desc_text || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Select 
          aria-label="Default select example" 
          value = {product.categoryId} 
          onChange= {setProductCategoryId}
        >
          <option>Select a category for this product...</option>
          {
            (props.categories)
            ?
              props.categories.map(
                (eachCategory, idx) => 
                    <option key={idx} value = {eachCategory.id} >{eachCategory.name}</option> 
              )
            : 
              <option key={1} value = {1} >{"CATEGORIES FAILED TO LOAD"}</option> 
          }
          {/* <option>Select a category for this product... categories</option>
          <option value={1}>{"Provided_by_prj"}</option>
          <option value={2}>{"Use_internal"}</option> */}
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="0"
          name="price"
          value={product.price || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Geometry Info</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter geometry info"
          name="geometry"
          value={product.geometry || ""}
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
