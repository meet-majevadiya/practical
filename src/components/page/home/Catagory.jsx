import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/autoplay";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function Catagory() {
  const scrollTop = window.scrollTo({ top: 0, behavior: "smooth" });
  const caragorySlider = {
    // slidesPerView: 1,
    // speed: 1000,
    spaceBetween: 30,
    loop: false,
    autoplay: false,
    roundLengths: true,
    navigation: {
      nextEl: ".category-prev1",
      prevEl: ".category-next1",
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      440: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        autoplay: true,
        speed: 1000,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  };
  const categorys = [
    "All",
    "Asian",
    "Beer, Wine & Spirit",
    "Beverages",
    "Dairy & Eggs",
    "Deli",
    "Frozen",
    "Fruits",
    "Gifts & Flowers",
    "Health",
    "Meats",
    "Pantry",
    "Pasta Rice & Grains",
    "Seefood",
    "Vegetables",
  ];
  return (
    <>
      <div className="category-section pt-120 pb-120">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <Swiper {...caragorySlider} className="swiper category1-slider">
              <div
                className="swiper-wrapper"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {categorys.map((item) => {
                  return (
                    <SwiperSlide className="swiper-slide">
                      <div className="eg-card category-card1 wow animate fadeInDown">
                        <Link
                          to={`${process.env.PUBLIC_URL}/live-auction`}
                          onClick={scrollTop}
                        >
                          <h5>{item}</h5>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catagory;
