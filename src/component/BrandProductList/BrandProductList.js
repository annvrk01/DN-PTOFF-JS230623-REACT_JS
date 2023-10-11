import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PRODUCT } from "../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ConfirmDelete from './../../../components/molecules/confirm'

import axios from 'axios';
const BrandProductlist = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const [brandproductsAPI, setBrandProductAPI] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/vitamin`)
      .then(res => {
        // console.log(res, 'res')
        setBrandProductAPI(res.data)
      })
      .catch(error => console.log(error));
  }, [])


  return (
    <>
        {brandproductsAPI.map((item) => (
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