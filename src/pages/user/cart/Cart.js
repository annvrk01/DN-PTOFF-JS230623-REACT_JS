import React from 'react';
import "../../../styles/cart/cart.css"
import {useSelector } from 'react-redux/es/hooks/useSelector';
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    return (
        <div className="container">
            <div className="cart-wrapper">
                        <div className="list-cart">
                        <a href="" className="cart-item">
                            <img src="" alt="" />
                        </a>
                        <div className="cart-body">
                            <div className="cart-selector">
                                <h3 className="product-title">
    
                                </h3>
                                <div className="price">
                                    <p>
    
                                    </p>
                                </div>
                                <div className="quantity">
                                    <input
                                        type="number"
                                        id="quantity"
    
                                        defaultValue=""
                                    />
                                </div>
                                <button>
                                    <i
                                        className="fa-solid fa-trash deleteProduct"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                
               

            </div>
            <div className="payment-product">
                <div className="cart-total-title">
                    <h3>Tổng tiền</h3>
                </div>
                <div className="price-item"></div>
                <div className="pay-btn">
                    <button>Thanh toán</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;