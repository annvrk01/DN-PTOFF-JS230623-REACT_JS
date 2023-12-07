import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import "../../css/bootstrap.css";
import ImageUploading from 'react-images-uploading';

const initialFormState = {
  id: -1,
  title_text: "",
  desc_text: "",
  price: "",
  geometry: "",
};

const maxImageCount = 100;

const AddCartForm = props => {
  const [images, setImages] = React.useState([]);
  const [cart, setCart] = useState(initialFormState);

  const onImgChange = (imageList, addUpdateIndex) => {

    console.log("imageList: ", imageList);
    //console.log("addUpdateIndex", addUpdateIndex);
    setImages(imageList);

    console.log("attaching imgs to cart: " ,imageList);
    cart.imgs = imageList;
    setCart(cart);
  };

  // useState(
  //   () => {
  //     console.log("useState images NOT WORKING");
  //     if (!cart) return;
  //   }, [images]
  // );


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCart({ ...cart, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!cart.title_text || !cart.desc_text || cart.price < 0) {
          console.log('some thing was null, empty, less than 0 or undefined !', cart);
          return;
        }

        props.addCart(cart);
        setCart(initialFormState);
      }}
    >
      <Form.Group>
        <Form.Label>Cartname</Form.Label>
        <Form.Control
          type="text"
          placeholder="title text"
          name="title_text"
          value={cart.title_text}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Desc text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="desc_text"
          value={cart.desc_text}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="0"
          name="price"
          value={cart.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Geometry</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter geometry info"
          name="geometry"
          value={cart.geometry}
          onChange={handleInputChange}
        />
      </Form.Group>


      <Form.Label>Cart image</Form.Label>
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
      <button type="submit" className="btn btn-primary">Add new cart</button>
    </form>
  );
};

export default AddCartForm;
