import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchBestSeller } from "../../redux/api/bestSellerAPI";
const Productlist = (props) => {
    const bestSellers = useSelector(state => state.bestSellers)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleDetail = (product) => {
        navigate("chi-tiet-san-pham/" + product.id)
    };
    useEffect(()=> {
        dispatch(fetchBestSeller())
    },[])
    return (
        <div>
            <div className="best-seller-container">
                <div className="best-seller-header">
                    <img src="/assets/img/item1.webp" alt="" />
                    <h2>Sản phẩm bán chạy</h2>
                </div>
                <div className="best-seller-list">
                    { bestSellers.data?.map((item) => (

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