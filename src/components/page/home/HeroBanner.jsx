import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css/autoplay";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function HeroBanner() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const bennarSlider = {
    slidesPerView: 1,
    speed: 2500,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    roundLengths: true,
    parallax: true,
    effect: "fade",
    navigation: false,
    fadeEffect: {
      crossFade: true,
    },
    // navigation: {
    //   nextEl: '.hero-next3',
    //   prevEl: '.hero-prev3',
    // },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero-one-pagination",
      clickable: true,
      // renderBullet: function(index, className) {
      //   return '<span class="' + className + '">' +  0  + (index + 1) + "</span>";
      // }
    },
  };
  return (
    <>
      <div className="hero-area hero-style-one">
        <div className="hero-main-wrapper position-relative">
          <Swiper {...bennarSlider} className="swiper banner1">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-1">
                  <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-xl-8 col-lg-10">
                        <div className="banner1-content">
                          <h3 style={{ color: "white" }}>
                            shop from your favourite
                          </h3>
                          <h2>grocery store!</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="hero-one-pagination d-flex justify-content-center flex-column align-items-center gap-3" />
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
