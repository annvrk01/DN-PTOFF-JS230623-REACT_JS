import { useEffect, useState } from "react";
import FakeData from "../../util/FakeData";
import ExampleBlock from "./ExampleBlock";
import ProductUtil from "../../util/ProductUtil";

export default function Category(props) {
  const {eachCateg} = props; 
  const [showingItems, setShowingItems] = useState([]);

  useEffect(() => {
    if(!eachCateg) return;
    let showingItems = [];

    ProductUtil.getCachedProducts()
    .then(
      (productDetailInfos) => {
        //console.error("productDetailInfos is ", productDetailInfos);
        if(!productDetailInfos){
          console.error("failed getting cached products", productDetailInfos);
          return;
        }
        productDetailInfos.forEach((eachProduct) => {
          if (
            ProductUtil.doesProductBelongToCategoryHierachy(
              eachCateg,
              eachProduct
            ) === false
          )
            return; //meaning to continue forEach
    
          showingItems.push(eachProduct);
        });
        setShowingItems(showingItems);
      }
    )

  }, [eachCateg]);

  return (
    <div className="categ">
      <div className="desc-block">
        <div className="category-title">
          <span className="category-icon"></span>
          <a href="/" className="category-name">
            {eachCateg.name}
          </a>
        </div>

        <div className="category-context">{eachCateg.description}</div>
      </div>
      {showingItems == null ? (
        <p> failed to get 'showingItems' </p>
      ) : (
        showingItems.map((eachItem) => {
          return <ExampleBlock detailedProduct={eachItem} key={eachItem.id}></ExampleBlock>;
        })
      )}
    </div>
  );
}
