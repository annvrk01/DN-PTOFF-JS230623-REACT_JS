import React, { useState, Fragment } from "react";
import AddCartForm from "./forms/AddCartForm";
import EditCartForm from "./forms/EditCartForm";
import CartTable from "./tables/CartTable";
import { Table, Card } from "react-bootstrap";
import CartUtil from "../../../../util/CartUtil";
import { useEffect } from "react";
import { s } from "../../../../util/utils";

const initialFormState = {
  id: -1,
  title_text: "",
  desc_text: "",
  price: "",
  geometry: "",
};

export default function CartManagement() {
  // Setting state
  const [searchKey, setSearchKey] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title_text");

  const [pageSize, setPageSize] = useState(CartUtil.DEFAULT_PAGE_SIZE);
  const [pageCount, setPageCount] = useState(1);
  const [carts, setCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const handleGetCart = (responseData) => {
    let carts = responseData.content;
    //console.log("got carts:", carts);

    let fillCountToMatchPageSize = pageSize - carts.length;
    while(fillCountToMatchPageSize > 0){
      carts.push({});
      fillCountToMatchPageSize--;
    }    
    setCarts(carts);

    let pageCount = responseData.totalPages;
    //console.log("pageCount = ", pageCount);
    setPageCount(pageCount);
  }   

  const handleNewPageIndex = (newPageIndex) => {
    setPageIndex(newPageIndex);
  }
  const pagingCart = () => {
    CartUtil.getCartPaging(      
      searchKey,
      pageIndex, 
      pageSize, 
      sortOrder, 
      sortBy
    )
    .then(
      (responseData) => {
        handleGetCart(responseData);
      }
    );
  }

  useEffect(
    () => {
      pagingCart();
    }, [searchKey, pageIndex, pageSize, sortOrder, sortBy]);
    


  const addCart = cart => {
    console.log("addcart", cart);
    CartUtil.addCart(cart).then(
      (cart) => {        
        setCarts([...carts, cart]);
        pagingCart();
      }
    )
  };

  const deleteCart = id => {
    setEditing(false);

    CartUtil.deleteCart(id).then(
      (response) => {   
        //setCarts(carts.filter(cart => cart.id !== id));
        pagingCart();
      }
    )
  };

  const updateCart = (id, cart) => {
    setEditing(false);

    CartUtil.updateCart(cart).then(
      (response) => {   
        let foundCartAt = carts.findIndex( cart => cart.id === response.data.id );   
        console.log("UPDATE PRODUCT SUCCEED, update at index " + foundCartAt)
        carts[foundCartAt] = response.data;  
        setCarts([...carts]);
      }
    )
  };

  const editRow = cart => {
    setEditing(true);

    setSelectedCart({
      id: cart.id,
      title_text: cart.title_text,
      desc_text: cart.desc_text,
      price: cart.price,
      geometry: cart.geometry,
    });
  };

  return (
    <div className="container-fluid">
      <h4>Add / Edit Carts</h4>
      <div className="row">
        <div className="col-12 col-sm-6 mx-auto addCart">
          <Card className="">
            {editing ? (
              <Fragment>
                <h5>Edit cart</h5>
                <EditCartForm
                  editing={editing}
                  setEditing={setEditing}
                  selectedCart={selectedCart}
                  updateCart={updateCart}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h5>Add cart</h5>
                <AddCartForm addCart={addCart} />
              </Fragment>
            )}
          </Card>
        </div>
        <div className="col-12">
          <h5>View carts</h5>
          <CartTable 
            carts={carts} editRow={editRow} deleteCart={deleteCart} 
            handleNewPageIndex={
              (newPageIndex) => {
                handleNewPageIndex(newPageIndex);
            }}
            pageCount={pageCount}
            pageSize={pageSize} 
            setPageSize={setPageSize}
            setSearchKey = {setSearchKey}
            setSortOrder = {setSortOrder}
            setSortBy = {setSortBy}
          />
        </div>
      </div>
    </div>
  );
};
