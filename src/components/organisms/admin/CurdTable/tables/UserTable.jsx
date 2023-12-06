import React, { useState, useRef } from "react";
import { Table } from "react-bootstrap";
import "./custom.css";
import ReactPaginate from 'react-paginate';
import editicon from "./edit.png";
import trashicon from "./trash.png";
import Authen from "../../../../../util/Authen";

const SORT_BY = {
  ASC : "asc",
  DES : "des"
}

const UserTable = props => {
  const [sortOrder, setSortOrder] = useState(SORT_BY.ASC);

  const inputSearchKey = useRef();
  
  const handlePageClick = (event) => {
    let pageIndex = event.selected + 1;
    console.log(
      `User requested page number ${pageIndex}`
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
              props.setSortBy("username");
              changeSortOrder();
            }}>
              Username
            </th>
            <th className="sortTrigger" onClick={(event) => {
              props.setSortBy("firstname");
              changeSortOrder();
            }}>
              First Name
            </th>
            <th className="sortTrigger" onClick={(event) => {
              props.setSortBy("lastname");
              changeSortOrder();
            }}>
              Last Name
            </th>
            <th className="sortTrigger" onClick={(event) => {
              //console.log("event ", event)
              props.setSortBy("email");
              changeSortOrder();
            }}>
              Email
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(user);
                    }}
                    className="edit"
                  >
                    <img src={editicon} />
                  </button>
                  <button
                    onClick={() => props.deleteUser(user.id)}
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
                No users
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

export default UserTable;
