import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LiveAuctionCard from "../LiveAuction.jsx/LiveAuctionCard";

function LiveAuctionHome1() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    getAllStore();
  }, []);

  const getAllStore = async () => {
    const response = await axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    });
    console.log("response", response.data);
    setStores(response.data);
  };

  return (
    <>
      <div className="live-auction pb-120">
        <img
          alt="images"
          src={process.env.PUBLIC_URL + "/images/bg/section-bg.png"}
          className="img-fluid section-bg"
        />
        <div className="container position-relative">
          {/* <img
            alt="images"
            src={process.env.PUBLIC_URL + "/images/bg/dotted1.png"}
            className="dotted1"
          />
          <img
            alt="images"
            src={process.env.PUBLIC_URL + "/images/bg/dotted1.png"}
            className="dotted2"
          /> */}
          <div className="row gy-4 mb-60 d-flex justify-content-start">
            {stores.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-10 ">
                <LiveAuctionCard
                  image={item.image}
                  price="75.99"
                  title={item.title}
                  data={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveAuctionHome1;
