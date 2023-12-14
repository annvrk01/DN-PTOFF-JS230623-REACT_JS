import React, { useState, useRef } from "react";
import { Table } from "react-bootstrap";
import "./custom.css";
import ReactPaginate from 'react-paginate';
import editicon from "./edit.png";
import trashicon from "./trash.png";
import Authen from "../../../../../util/Authen";
import parse from 'html-react-parser';

const SORT_BY = {
  ASC : "asc",
  DES : "des"
}

const CartStatusEnum = new Map();
CartStatusEnum.set(0,"BROWSING");
CartStatusEnum.set(1,"AWAITING_PAYMENT");
CartStatusEnum.set(2,"PAID");

const CartTable = props => {
  const [sortOrder, setSortOrder] = useState(SORT_BY.ASC);

  const inputSearchKey = useRef();
  
  const handlePageClick = (event) => {
    let pageIndex = event.selected + 1;
    console.log(
      `Cart requested page number ${pageIndex}`
    );
    props.handleNewPageIndex(pageIndex);
  };

  const changeSortOrder = () => {
    if(sortOrder === SORT_BY.ASC){
      setSortOrder(SORT_BY.DES);
      props.setSortOrder(SORT_BY.DES);
      return;
    }
    setSortOrder(SORT_BY.ASC);
    props.setSortOrder(SORT_BY.ASC);
  }

  return (
    <>
      <div className="length_filter_group">        
        <div className="dataTables_length" id="example_length">
          <label>Show 
          <select name="example_length" aria-controls="example" className=""
          value={props.pageSize}         
          onChange={ 
            (event) => {
              props.setPageSize(event.target.value);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select> entries</label>
        </div>

        <div id="example_filter" className="dataTables_filter">
          <label>Search:
            <input 
              type="search" className="" placeholder="" aria-controls="example" 
              ref={inputSearchKey}            
            />
            <button className = "btn btnPrimary" onClick={
              () => {
                console.log("setSearchKey " + inputSearchKey.current.value);
                props.setSearchKey(inputSearchKey.current.value);
              }
            }>SEARCH</button>
          </label>
        </div>
      </div>


      <Table striped bordered hover responsive size="md">
        <thead>
          <tr>
            <th className="sortTrigger" onClick={(event) => {
              //console.log("event ", event)
              props.setSortBy("id");
              changeSortOrder();
            }}>
              CART ID
            </th>
            <th className="sortTrigger" onClick={(event) => {
              props.setSortBy("username");
              changeSortOrder();
            }}>
              CUSTOMER NAME
            </th>
            <th className="sortTrigger" onClick={(event) => {
              props.setSortBy("totalprice");
              changeSortOrder();
            }}>
              TOTAL PRICE
            </th>
            
            <th className="sortTrigger" onClick={(event) => {
              //...
            }}>
              PRODUCT IDS
            </th>

            
            <th className="sortTrigger" onClick={(event) => {
              //...
            }}>
              PRODUCT NAMES
            </th>

            <th className="sortTrigger" onClick={(event) => {
              //...
            }}>
              Cart status
            </th>
            
            <th className="sortTrigger" onClick={(event) => {
              props.setSortBy("date_added");
              changeSortOrder();
            }}>
              DATE ADDED
            </th>
            
            <th className="sortTrigger" onClick={(event) => {
              props.setSortBy("date_updated");
              changeSortOrder();
            }}>
              DATE UPDATED
            </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.carts.length > 0 ? (
            props.carts.map((cart, idx) => (
              <tr key={idx}>
                <td>{cart.id}</td>
                <td>{cart.username}</td>
                <td>{(cart.totalprice || "0") + " $" }</td>
                <td>{cart.productids}</td>
                <td>{cart.productnames}</td>
                <td>{CartStatusEnum?.get(cart?.status) || "UNKNOWN"}</td>
                <td>{cart.date_added?.split("T").join()}</td>
                <td>{cart.date_updated}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(cart);
                    }}
                    className="edit"
                  >
                    <img src={editicon} />
                  </button>
                  <button
                    onClick={() => props.deleteCart(cart.id)}
                    className="delete"
                  >
                    <img src={trashicon} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No carts
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <div className="navigation">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={props.pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  )
};



export default CartTable;
