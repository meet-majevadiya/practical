import React from "react";
import Counter from "../../common/Counter";

function AuctionDetailsInfo({ data }) {
  return (
    <>
      <div className="row g-4 mb-50">
        <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
          {/* <ul className="nav small-image-list d-flex flex-md-column flex-row justify-content-center gap-4  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".4s">
            <li className="nav-item">
              <div id="details-img1" data-bs-toggle="pill" data-bs-target="#gallery-img1" aria-controls="gallery-img1">
                <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery1.png"} className="img-fluid" />
              </div>
            </li>
            <li className="nav-item">
              <div id="details-img2" data-bs-toggle="pill" data-bs-target="#gallery-img2" aria-controls="gallery-img2">
                <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery2.png"} className="img-fluid" />
              </div>
            </li>
            <li className="nav-item">
              <div id="details-img3" data-bs-toggle="pill" data-bs-target="#gallery-img3" aria-controls="gallery-img3">
                <img alt="images" src={process.env.PUBLIC_URL + "/images/bg/prod-gallery3.png"} className="img-fluid" />
              </div>
            </li>
          </ul> */}
          <div
            className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".4s"
          >
            <div
              className="tab-pane big-image fade show active"
              id="gallery-img1"
            >
              <img alt="images" src={data.image} className="auc-img" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div
            className="product-details-right  wow fadeInDown"
            data-wow-duration="1.5s"
            data-wow-delay=".2s"
          >
            <h3>{data.title}</h3>
            <p className="para">{data.description}</p>
            <h4>
              <span>${data.price}</span>/item
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuctionDetailsInfo;
