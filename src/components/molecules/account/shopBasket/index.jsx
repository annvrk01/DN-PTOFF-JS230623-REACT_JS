import { useState } from "react";
import "./cart.css";
import ProductUtil from "../../../../util/ProductUtil";
import { AuthorUtil, reloadPage } from "../../../../util/utils";
import CartUtil from "../../../../util/CartUtil";
import { useEffect } from "react";

export default function ShopBasket(props) {
  const { isCartShowing, setCartShowing, cart, setCart } = props;

  function toggleCart() {
    if (isCartShowing) {
      setCartShowing(false);
      return;
    }

    CartUtil.getLoggedInUserCart()
    .then(
      cart => {
        if (CartUtil.isCartValid(cart)) {
          setCartShowing(true);
        }
        setCart(cart);
      }
    )      
    
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart?.products?.forEach(
      (eachProduct, idx) => {
        totalPrice += Number(eachProduct.price) || 0;
      });
    return totalPrice;
  }

  useEffect(() => {    
    console.log("cart changed")
  }, [cart]);

  useEffect(() => {
    console.log("isCartShowing changed")
  }, [isCartShowing]);


  const checkOutCart = (e) => {  
    e.preventDefault();  
    console.log("checkOutCart ", cart)

    if(!cart || cart.id < 1) return;
    CartUtil.checkOutCart(cart);
  }

  return (
    <div
      className="notf-icon notiff_top ss-basket basket_notiff userStuffs"
      onClick={toggleCart}
    >
      {isCartShowing ? (
        <div className="absolute outside_message_cont">
          <div className="top_triangle_back">
            <div className="top_triangle"></div>
          </div>

          <div className="relative" style={{ minHeight: "100px " }}>
            <div className="top"></div>
            <div className="items-container">
              <div className="sb-products-wrapper">
                {cart?.products?.map((eachProduct, idx) => {
                  // console.log("eachProduct = ", eachProduct);
                  if (!eachProduct) {
                    return (
                      <p key={idx}>
                        {" "}
                        NO Product with id {eachProduct.id} given by
                        eachCartItem.id
                      </p>
                    );
                  }

                  let author = AuthorUtil.select(eachProduct?.authorId || 0);
                  return (
                    <div
                      className="sb-product-dropdown clearfix cart-item"
                      key={idx}
                    >
                      <a href="/">
                        <img alt="" src={ProductUtil.getStaticImageUrl(eachProduct.img)} width="75"></img>
                      </a>
                      <div className="det">
                        <a className="title" href="">
                          <span className="light">
                            {eachProduct.title_text}
                            {" "}
                            {eachProduct.title_extra_info || "3D Models"}{" "}
                          </span>
                        </a>
                        <div className="auth">
                          by
                          <a href="">{author?.username || "not-implemented"}</a>
                        </div>
                        <div className="price">
                          <span className="dollar">$</span>
                          {eachProduct.price}
                        </div>
                      </div>
                      <div className="trash">
                        <button
                          type="button"
                          className="ss-trash"
                          onClick={() => {
                            CartUtil.removeItemFromCart(eachProduct, cart)
                            .then(
                              res => {
                                console.log("respondData removeItemFromCart: ", res);
                                //reloadPage();
                              }
                            )
                          }}
                        ></button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="sb-bottom-dd">
                <div>
                  Total:
                  <span className="price" id="cart-item-total-price">
                    <span className="dollar">$</span>
                    {getTotalPrice()}
                  </span>
                </div>
                <a href="" className="btn-stock filled" onClick={ checkOutCart }>
                  <span className="ss-cart"></span>
                  Check Out →
                </a>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      ) : null}

      <span className="notification-counter " hidden>
        4
      </span>
      <a href="/shopping-cart" className="mobile-link" hidden>
        View cart
      </a>
    </div>
  );
}
