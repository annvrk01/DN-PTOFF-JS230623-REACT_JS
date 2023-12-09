import { useEffect, useState } from "react";
import ProductUtil from "../../util/ProductUtil";

export default function ExampleBlock(props) {
  const {detailedProduct} = props;

  const [imgName, setImgName] = useState("");

  const [productFileFormats, setProductFileFormats] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    let productFileFormats = "";
    detailedProduct?.files?.forEach((each) => {
      productFileFormats += "." + each.file_format + " ";
    });    
    setProductFileFormats(productFileFormats);

    
    let productPrice =
      detailedProduct.price > 0 ? "" + (detailedProduct.price + " $") : "Free";
    setProductPrice(productPrice);

    ProductUtil.getImages(detailedProduct)
    .then(
      imgs => {
        console.log("got imgs", imgs);
        setImgName(imgs[0].name);
      }
    )
  }, [detailedProduct]);


  return (
    <div className="example-block">
      <input type="text" className="product-id" hidden defaultValue="-1" />
      <div className="content-wrapper">
        <a href={"/product-detail/"+ detailedProduct.id} className="link">
          <img
            alt=""
            className="item-img product-bigimg"
            // src={detailedProduct?.imgs[0] || "null"}
            src = { (ProductUtil.getStaticImageUrl(imgName) )
               || ProductUtil.getStaticImageUrl("productImage-id151-8-12-2023T22-04-39-9910.jpeg")}
          />
        </a>
      </div>
      <div className="info-wrapper">
        <div className="title product-title">{detailedProduct.title_text}</div>
        <div className="format product-file-formats">{productFileFormats}</div>
        <div className="example-footer">
          <span className="price product-price">{productPrice}</span>
          <span className="stats">
            <span className="download-count product-download-count">
              {detailedProduct.download_count}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
