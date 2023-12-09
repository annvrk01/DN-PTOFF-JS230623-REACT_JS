import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";
import ImageUploading from 'react-images-uploading';
import ProductUtil from "../../../../../util/ProductUtil";
import { cloneObj } from "../../../../../util/utils";

const initialFormState = {
  id: -1,
  title_text: "",
  desc_text: "",
  price: "",
  categoryId: 1,
  geometry: "",
};

const maxImageCount = 100;

const AddProductForm = (props) => {
  const [images, setImages] = React.useState([]);
  const [product, setProduct] = useState(initialFormState);
  const [showingCategories, setShowingCategories] = useState([]);

  useEffect(
    () => {
      console.log("props.categories changed", props);
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

  const onImgChange = (imageList, addUpdateIndex) => {

    console.log("imageList: ", imageList);
    //console.log("addUpdateIndex", addUpdateIndex);
    setImages(imageList);

    console.log("attaching imgs to product: " ,imageList);
    product.imgs = imageList;
    setProduct(product);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!product.title_text || !product.desc_text || product.price < 0) {
          console.log('some thing was null, empty, less than 0 or undefined !', product);
          return;
        }

        props.addProduct(product);
        //setProduct(initialFormState);
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
        <Form.Label>Desc text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="desc_text"
          value={product.desc_text}
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
          value={product.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Geometry</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter geometry info"
          name="geometry"
          value={product.geometry}
          onChange={handleInputChange}
        />
      </Form.Group>


      <Form.Label>Product image</Form.Label>
      <ImageUploading
        multiple
        value={images}
        onChange={onImgChange}
        maxNumber={maxImageCount}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              type="button"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button
              type="button"
              onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button 
              type="button" onClick={() => onImageUpdate(index)}>Update</button>
                  <button 
              type="button" onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <button type="submit" className="btn btn-primary">Add new product</button>
    </form>
  );
};

export default AddProductForm;
