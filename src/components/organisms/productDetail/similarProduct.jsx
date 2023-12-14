/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./productDetailRoot.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "../../atoms/ProductSlider";
import FakeData, { FakeDataGenerator } from "../../../util/FakeData";
import moment from "moment";
import { AuthorUtil, StringUtil, reloadPage } from "../../../util/utils";
import ProductUtil from "../../../util/ProductUtil";
import ProductBreadcrumb from "../../atoms/ProductBreadcrumb";
import ProductFileInfo from "../../atoms/ProductFileInfo";
import { useParams } from "react-router-dom";
import LoginRegister from "../../molecules/account";
import { hadLoggedIn } from "../../../util/Authen";
import AccountHambuger from "../../molecules/account/hambuger";
import ShopBasket from "../../molecules/account/shopBasket";
import CartUtil from "../../../util/CartUtil";
import parse from "html-react-parser";

export default function SimilarProduct(props) {
  const { similarProduct} = props;
  const [ productImageSrc, setProductImageSrc ] = useState("");

  useEffect(
    () => {
      console.log("similarProduct changed, ", similarProduct);
      if(!similarProduct) return;
      
      if(similarProduct.imageNames){        
        let src = similarProduct.imageNames.split(",")[0];
        setProductImageSrc(ProductUtil.getStaticImageUrl(src));
        return;
      }  

      if(similarProduct.imgs 
        && similarProduct.imgs instanceof Array
        && similarProduct.imgs[0]
        && similarProduct.imgs[0].name){
          let src = similarProduct.imgs[0];
          setProductImageSrc(ProductUtil.getStaticImageUrl(src));
          return;
        }
    }
    , [similarProduct])
  return (
    <div>
      <div className="search-result  premium">
        <div className="search-result__content-wrapper">
          <a href={"/product-detail/"+ similarProduct.id} className="search-result__thumb-wrapper">
            <img
              style={{ maxWidth: "200px" }}
              className="search-result__thumb"
              src={productImageSrc}
              alt={similarProduct?.title_text}
              title={similarProduct?.title_text}
              rel='{"pret":"$63","type":".wrl .unitypackage .upk .tgo .stl .obj .fbx .blend","standard":null,"imgd":"https:\/\/preview.free3d.com\/img\/2016\/05\/2705008806873531721\/re2rg2js.jpg"}'
            ></img>
            <div className="standard "></div>
          </a>
          <div className="search-result__info-wrapper">
            <div className="search-result__title">
              <a
                href="/3d-model/intergalactic-spaceship-design-8562.html"
                className="link product-page-link"
              >
                {similarProduct?.title_text}
              </a>
            </div>
            <span className="search-result__format">
              .wrl .unitypackage .upk .tgo .stl .obj .fbx .blend
            </span>
            <div className="search-result__footer">
              <span
                data-price="63"
                className="search-result__price  product-page-link"
              >
                <span className="dollar">$</span>{similarProduct?.price}{" "}
              </span>
              <span className="search-result__stats">
                <span className="stat-item views">{similarProduct?.viewCount}</span>
              </span>
            </div>
          </div>

          <div className="sec_entry_group"></div>
          <a
            href="/3d-model/intergalactic-spaceship-design-8562.html"
            className="product-tools product-tools__premium product-page-link"
          >
            <span className="product-tool product-tool__zoom"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
