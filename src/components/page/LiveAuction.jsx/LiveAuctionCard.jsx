import React from "react";
import { Link, useHistory } from "react-router-dom";
import Counter from "../../common/Counter";

function LiveAuctionCard(props) {
  const history = useHistory();

  return (
    <>
      <div
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        className="eg-card auction-card1 wow fadeInDown"
      >
        <div className="auction-img">
          <img
            alt="images"
            src={`${props.image}`}
            width="150px"
            height="250px"
          />
        </div>
        <div className="auction-content">
          <h4 className="service-title">
            <Link
              to={`${process.env.PUBLIC_URL}/auction-details`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {props.title}
            </Link>
          </h4>
          <div className="auction-card-bttm">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.push({
                  pathname: "auction-details",
                  state: props.data.id,
                });
              }}
              className="eg-btn btn--primary btn--sm w-100"
            >
              View All Items
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveAuctionCard;
