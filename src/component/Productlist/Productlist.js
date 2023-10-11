import React, { useEffect, useState } from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useGetAllProductsQuery } from "../../redux/api/productAPI";
const Productlist = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const { items: products, status } = useSelector((state) => state.products)
    const { data } = useGetAllProductsQuery();
    const handleDetail = (product) => {
        navigate("chi-tiet-san-pham/" + product.id)
        // console.log("okokoko")
    };
    return (
        <div>
            <div className="best-seller-container">
                <div className="best-seller-header">
                    <img src="/assets/img/item1.webp" alt="" />
                    <h2>Sản phẩm bán chạy</h2>
                </div>
                <div className="best-seller-list">
                    {data && data.map((item) => (

                        <div className="best-seller-product-card">
                            <a>
                                <img src={item.img} />
                            </a>
                            <div className="best-seller-product-content">
                                <div className="name-product">
                                    <a className="showDetail" data-id="" onClick={() => {
                                        handleDetail(item);
                                    }}>
                                        {item.title}

                                    </a>
                                </div>
                                <div className="product-price">
                                    <span>
                                        {item.price}
                                        <span>{item.unit}</span>
                                    </span>
                                </div>
                                <div className="product-info">
                                    <a>
                                        {item.quantityofunit}
                                    </a>
                                </div>
                            </div>
                        </div>

                    ))
                    }


                </div>
            </div>

        </div>
    );
};

export default Productlist;