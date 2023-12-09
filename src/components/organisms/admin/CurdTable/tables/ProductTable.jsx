import React, { useState, useRef } from "react";
import { Table } from "react-bootstrap";
import "./custom.css";
import ReactPaginate from "react-paginate";
import editicon from "./edit.png";
import trashicon from "./trash.png";
import Authen from "../../../../../util/Authen";
import parse from "html-react-parser";

const SORT_BY = {
  ASC: "asc",
  DES: "des",
};

const ProductTable = (props) => {
  const [sortOrder, setSortOrder] = useState(SORT_BY.ASC);

  const inputSearchKey = useRef();

  const handlePageClick = (event) => {
    let pageIndex = event.selected + 1;
    console.log(`Product requested page number ${pageIndex}`);
    props.handleNewPageIndex(pageIndex);
  };

  const changeSortOrder = () => {
    if (sortOrder === SORT_BY.ASC) {
      setSortOrder(SORT_BY.DES);
      props.setSortOrder(SORT_BY.DES);
      return;
    }
    setSortOrder(SORT_BY.ASC);
    props.setSortOrder(SORT_BY.ASC);
  };

  return (
    <>
      <div className="length_filter_group">
        <div className="dataTables_length" id="example_length">
          <label>
            Show
            <select
              name="example_length"
              aria-controls="example"
              className=""
              value={props.pageSize}
              onChange={(event) => {
                props.setPageSize(event.target.value);
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>{" "}
            entries
          </label>
        </div>

        <div id="example_filter" className="dataTables_filter">
          <label>
            Search:
            <input
              type="search"
              className=""
              placeholder=""
              aria-controls="example"
              ref={inputSearchKey}
            />
            <button
              className="btn btnPrimary"
              onClick={() => {
                console.log("setSearchKey " + inputSearchKey.current.value);
                props.setSearchKey(inputSearchKey.current.value);
              }}
            >
              SEARCH
            </button>
          </label>
        </div>
      </div>

      <Table striped bordered hover responsive size="md">
        <thead>
          <tr>
            <th
              className="sortTrigger"
              onClick={(event) => {
                //console.log("event ", event)
                props.setSortBy("title_text");
                changeSortOrder();
              }}
            >
              Title text
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("desc_text");
                changeSortOrder();
              }}
            >
              Description
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("category_name");
                changeSortOrder();
              }}
            >
              Category
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("price");
                changeSortOrder();
              }}
            >
              Price
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("geometry");
                changeSortOrder();
              }}
            >
              Geometry info
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("likes_count");
                changeSortOrder();
              }}
            >
              Likes count
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("visit_count");
                changeSortOrder();
              }}
            >
              Visit count
            </th>
            <th
              className="sortTrigger"
              onClick={(event) => {
                props.setSortBy("download_count");
                changeSortOrder();
              }}
            >
              Download count
            </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.products.length > 0 ? (
            props.products.map((product, idx) => (
              <tr key={idx}>
                <td>{product.title_text}</td>
                <td>{parse(product.desc_text + "" || "")}</td>
                <td>
                  {
                    props.categories?.find(
                      (any) => any.id == product.categoryId
                    )?.name 
                    // || "--unknown--"
                  }
                </td>
                <td>{product.price}</td>
                <td>{product.geometry}</td>
                <td>{product.likes_count}</td>
                <td>{product.visit_count}</td>
                <td>{product.download_count}</td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(product);
                    }}
                    className="edit"
                  >
                    <img src={editicon} />
                  </button>
                  <button
                    onClick={() => props.deleteProduct(product.id)}
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
                No products
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
  );
};

export default ProductTable;
