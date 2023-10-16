import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HomePage() {
  return (
    <div className="home">
      <div className="content">
        <h1>
          <span>
            <strong> SPIRIT STORE – WE ARE MASTER OF SPIRITS </strong>
          </span>
        </h1>
      </div>
      <div className="wrapper">
        <div className="sidebar">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://wine24h.com/wp-content/uploads/2023/01/macallan-banner.webp"
                className="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/25f312114801473.6041f7e2a7fe7.jpg"
                className="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cdn3.dhht.vn/wp-content/uploads/2023/09/15-chai-ruou-dat-nhat-the-gioi-ten-cac-loai-ruou-noi-tieng-21.jpg"
                className="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/240081264_359234379234847_2113549064776868020_n.jpg?stp=dst-jpg_p600x600&_nc_cat=108&ccb=1-7&_nc_sid=52f669&_nc_ohc=SR8DEetCRcYAX8ln5gr&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBeFPQNzoGHEw7OyWaiHGm6IOGQBxkVHo385KATMoCbZg&oe=652B7298"
                className="slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.multivu.com/players/English/8590851-johnnie-walker-game-of-thrones-a-song-of-ice-a-song-of-fire-whisky/image/JWGOTHERONEW_1565739536628-RSS.jpg"
                className="slider"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="image1">
          <img
            src="https://spiritstore.co.uk/media/wysiwyg/kah_tequila_skull_offer_banner_small.jpg"
            className="sidebar-image"
          />
        </div>
        <div className="image2">
          <img
            src="https://spiritstore.co.uk/media/wysiwyg/rum-homepage-banner-right.jpg"
            className="sidebar-image"
          />
        </div>
      </div>
      <div className="main-row">
        <p className="title"> BEST ONLINE SPIRITS STORE </p>
        <p className="text">
          {" "}
          We are an online alcohol shop with a fantastic range of beers, wine
          and spirits at discount prices. As a drinks supplier to homes and
          independent UK bars, we know our drinks - by cutting out the
          middleman, we’re able to give you fantastic deals when buying spirits
          online. <br />
          <br />
          We stock a wide range of cheap alcohol, even from the big names in
          drinks such as Jack Daniels, Smirnoff, Gordons and more. Our range of
          discount spirit prices beat other online stores and supermarkets, and
          we have a choice of delivery options including a next day service as
          long as you order before 11am, prices confirmed at checkout.
          <br />
          <br />
          Whether youre stocking up the home bar or organising a drinks event,
          we’re your one-stop alcohol shop - from mixers to glassware, we’ve got
          everything else you need covered!{" "}
        </p>
      </div>
      <section className="product-main">
        <h3>
          <span className="header-title"> Best Sellers</span>
        </h3>
        <div className="product">
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/12953/catalog/Macallan-18-Sherry-Oak-2022.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Macallan 18YO Sherry Oak</p>
              <p>
                <span>9.450.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/8851/catalog/Singleton-15-dufftown.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Singleton 15</p>
              <p>
                <span> 1.500.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/2826/catalog/ruou-hibiki-harmony.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Hibiki Harmony</p>
              <p>
                <span> 3.400.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/4378/catalog/Martell-VSOP.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Cognac Martell VSOP Medaillony</p>
              <p>
                <span> 1.400.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/11228/catalog/Song-Cai-Floral.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Gin Sông Cái - Việt Nam Floral Gin</p>
              <p>
                <span> 1.150.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/10145/catalog/Lady-Trieu-Hoi-An.jpg?size=600 "
            />
            <div className="product-item-text">
              <p>Lady Trieu - Hoi An Spice Road Gin</p>
              <p>
                <span> 860.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/457/catalog/ruou-tequila-patron-reposado.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Tequila Patron Reposado</p>
              <p>
                <span> 970.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="product-item">
            <img
              width="250px"
              src="https://sanhruou.com/media/10607/catalog/Absolut-Grapefruit.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Vodka Absolut Grapefruit</p>
              <p>
                <span> 500.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
        </div>
      </section>
      <section className="product-main">
        <h3>
          <span className="header-title"> New Arrivals </span>
        </h3>

        <div className="menu">
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/11224/catalog/Johnnie-Walker-Blue-Rabbit.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Johnnie Walker Blue Label </p>
              <p>
                <span>5.000.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/14208/catalog/Balvenie-19-A-Revelation-of-Cask-and-Character.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Balvenie 19YO - A Revelation of Cask</p>
              <p>
                <span>14.000.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/12184/catalog/Glenfiddich-18-VAT-04.jpg?size=600"
            />
            <div className="product-item-text">
              <p> Glenfiddich 18YO VAT 04 - Perpetual Collection</p>
              <p>
                <span>4.450.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/1078/catalog/ruou-hennessy-xo.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Cognac Hennssy XO</p>
              <p>
                <span>4.500.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/9571/catalog/Sierra-Reposado.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Tequila Sierra Reposado </p>
              <p>
                <span>700.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/7108/catalog/Opihr-Exotic-Citrus.jpg?size=600"
            />
            <div className="product-item-text">
              <p>Gin Opihr Exotic Citrus - London Dry Gin</p>
              <p>
                <span>800.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/13669/catalog/The-Original-Islay-Rum.jpg?size=600"
            />
            <div className="product-item-text">
              <p>The Original Islay Rum</p>
              <p>
                <span>1.250.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
          <div className="item">
            <img
              width="250px"
              src="https://sanhruou.com/media/3122/catalog/ruou-ballantine-s-17-nam.jpg?size=600"
            />
            <div className="product-item-text">
              <p> Ballantine’s 17 year old </p>
              <p>
                <span>1.300.000 </span>
                <sup> ₫ </sup>
              </p>
            </div>
            <button> Add to Cart </button>
          </div>
        </div>
      </section>
      <section className="product-main">
        <h3>
          <span className="header-title"> Discovery Brands</span>
        </h3>
        <div className="menu">
          <div className="item">
            <img
              width="350px"
              src="http://muabanruoungoai.com.vn/public/upload/macallan-topwine.jpg "
            />
            <p> Macallan Brand</p>
          </div>
          <div className="item">
            <img
              width="350px"
              src="https://thewinebox.vn/wp-content/uploads/2023/05/gin-song-cai.jpg"
            />
            <p> Song Cai Dry Gin Viet Nam </p>
          </div>
          <div className="item">
            <img
              width="350px"
              src="https://www.phanphoiruoungoai.net/wp-content/uploads/2020/12/noi-bat-dau-thuong-hieu-ruou-mortlach-800x529.jpg"
            />
            <p> The Morlatch Brand </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
