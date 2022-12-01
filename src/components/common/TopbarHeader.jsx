import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Select from 'react-select';
// import { curencyOptions } from "../../data/data";
function TopbarHeader() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  // const style = {
  //   control: base => ({
  //     ...base,
  //     border: 0,
  //     boxShadow: 'none'
  //   })
  // };
  useEffect(() => {
    const select = document.querySelectorAll(".selectBtn");
    const option = document.querySelectorAll(".option");
    let index = 1;
    select.forEach((a) => {
      a.addEventListener("click", (b) => {
        console.log("click");
        const next = b.target.nextElementSibling;
        next.classList.toggle("toggle");
        next.style.zIndex = index++;
      });
    });
    option.forEach((a) => {
      a.addEventListener("click", (b) => {
        console.log("click");
        b.target.parentElement.classList.remove("toggle");
        const parent = b.target.closest(".select").children[0];
        parent.setAttribute("data-type", b.target.getAttribute("data-type"));
        parent.innerText = b.target.innerText;
      });
    });
  });
  return (
    <>
      <div className="topbar">
        <div className="topbar-left d-flex flex-row align-items-center">
          <h6>Follow Us</h6>
          <ul className="topbar-social-list gap-2">
            <li>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <i className="bx bxl-pinterest-alt" />
              </a>
            </li>
          </ul>
        </div>
        <div className="email-area">
          <h6>
            Email: <a href="mailto:contact@example.com">contact@example.com</a>
          </h6>
        </div>
        <div className="topbar-right gap-2">
          <Link
            to={`${process.env.PUBLIC_URL}/join-merchant`}
            onclick={scrollTop}
          >
            Join Merchant
          </Link>
          {/* <Select width='10px' styles={style} placeholder="select your state"options={curencyOptions}> </Select> */}
          <div className="select">
            <div className="selectBtn" data-type="firstOption">
              USD
            </div>
            <div className="selectDropdown">
              <div className="option" data-type="firstOption">
                USD
              </div>
              <div className="option" data-type="secondOption">
                EURO
              </div>
              <div className="option" data-type="thirdOption">
                TAKA
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopbarHeader;
