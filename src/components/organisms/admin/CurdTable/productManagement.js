import React, { useState, Fragment } from "react";
import AddProductForm from "./forms/AddProductForm";
import EditProductForm from "./forms/EditProductForm";
import ProductTable from "./tables/ProductTable";
import { Table, Card } from "react-bootstrap";
import ProductUtil from "../../../../util/ProductUtil";
import { useEffect } from "react";
import { cloneObj, s } from "../../../../util/utils";

const initialFormState = {
  id: -1,
  title_text: "",
  desc_text: "",
  categoryId: 1,
  price: "",
  geometry: "",
};

export default function ProductManagement() {
  // Setting state
  const [searchKey, setSearchKey] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title_text");

  const [pageSize, setPageSize] = useState(ProductUtil.DEFAULT_PAGE_SIZE);
  const [pageCount, setPageCount] = useState(1);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(
    () => {
      const fetchData = async () => {
        let newCategories = await ProductUtil.getAllCategories();
        console.log("getAllCategories ", newCategories);
        setCategories(newCategories);
        return newCategories;
      }
      fetchData()
        .catch(console.error);
    }
    , [])


  const [selectedProduct, setSelectedProduct] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const handleGetProduct = (responseData) => {
    let products = responseData.content;
    //console.log("got products:", products);

    let fillCountToMatchPageSize = pageSize - products.length;
    while (fillCountToMatchPageSize > 0) {
      products.push({});
      fillCountToMatchPageSize--;
    }
    setProducts(products);

    let pageCount = responseData.totalPages;
    //console.log("pageCount = ", pageCount);
    setPageCount(pageCount);
  }

  const handleNewPageIndex = (newPageIndex) => {
    setPageIndex(newPageIndex);
  }
  const pagingProduct = () => {
    ProductUtil.getProductPaging(
      searchKey,
      pageIndex,
      pageSize,
      sortOrder,
      sortBy
    )
      .then(
        (responseData) => {
          handleGetProduct(responseData);
        }
      );
  }

  useEffect(
    () => {
      pagingProduct();
    }, [searchKey, pageIndex, pageSize, sortOrder, sortBy]);



  const addProduct = product => {
    console.log("try adding product...", product);
    ProductUtil.addProduct(product).then(
      (product) => {
        
        alert("Adding product success");
        setProducts([...products, product]);
        pagingProduct();
      }
    )
  };

  const deleteProduct = id => {
    setEditing(false);

    ProductUtil.deleteProduct(id).then(
      (response) => {
        //setProducts(products.filter(product => product.id !== id));
        pagingProduct();
      }
    )
  };

  const updateProduct = (id, product) => {
    setEditing(false);

    ProductUtil.updateProduct(product).then(
      (response) => {
        let foundProductAt = products.findIndex(product => product.id === response.data.id);
        console.log("UPDATE PRODUCT SUCCEED, update at index " + foundProductAt)
        products[foundProductAt] = response.data;
        setProducts([...products]);
      }
    )
  };

  const editRow = product => {
    setEditing(true);

    setSelectedProduct({
      id: product.id,
      title_text: product.title_text,
      desc_text: product.desc_text,
      price: product.price,
      geometry: product.geometry,
    });
  };

  return (
    <div className="container-fluid">
      <h4>Add / Edit Products</h4>
      <div className="row">
        <div className="col-12 col-sm-6 mx-auto addProduct">
          <Card className="">
            {editing ? (
              <Fragment>
                <h5>Edit product</h5>
                <EditProductForm
                  editing={editing}
                  setEditing={setEditing}
                  selectedProduct={selectedProduct}
                  updateProduct={updateProduct}

                  categories={categories}
                  setCategories={setCategories}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h5>Add product</h5>
                <AddProductForm
                  addProduct={addProduct}

                  categories={categories}
                  setCategories={setCategories} />
              </Fragment>
            )}
          </Card>
        </div>
        <div className="col-12">
          <h5>View products</h5>
          <ProductTable
            products={products} editRow={editRow} deleteProduct={deleteProduct}
            handleNewPageIndex={
              (newPageIndex) => {
                handleNewPageIndex(newPageIndex);
              }}
            pageCount={pageCount}
            pageSize={pageSize}
            setPageSize={setPageSize}
            setSearchKey={setSearchKey}
            setSortOrder={setSortOrder}
            setSortBy={setSortBy}

            categories={categories}
            setCategories={setCategories}
          />
        </div>
      </div>
    </div>
  );
};
