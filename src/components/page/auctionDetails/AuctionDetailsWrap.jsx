import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuctionDetailsInfo from "./AuctionDetailsInfo";
import AuctionDetailsTab from "./AuctionDetailsTab";

function AuctionDetailsWrap() {
  const [singleData, setsingleData] = useState({});
  const Id = useLocation().state;
  useEffect(() => {
    if (Id) {
      getSingleProduct();
    }
  }, []);

  const getSingleProduct = async () => {
    const response = await axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${Id}`,
    });
    console.log("response", response.data);
    setsingleData(response.data);
  };
  return (
    <>
      <div className="auction-details-section pt-120 pb-120">
        <div className="container">
          <AuctionDetailsInfo data={singleData}/>
          <AuctionDetailsTab />
        </div>
      </div>
    </>
  );
}

export default AuctionDetailsWrap;
