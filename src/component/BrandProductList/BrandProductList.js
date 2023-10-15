import React, { useEffect} from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { fetchTopBrand } from "../../redux/api/topBrandAPI";
const BrandProductlist = (props) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const topBrands = useSelector(state => state.topBrands)
  useEffect(() => {
    dispatch(fetchTopBrand())
  }, [])
  return (
    <>
        {topBrands.data?.map((item) => (
          <div className="favourite-brand-card">
            <a href="">
              <div className="brand-product">
                <img src={item.img} />
              </div>
              <div className="content">
                <p>
                  {item.title}
                </p>
              </div>
            </a>
          </div>

        ))}
    </>
  );
};

export default BrandProductlist;