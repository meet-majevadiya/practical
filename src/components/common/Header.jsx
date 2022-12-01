import React, { useEffect, useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TopbarHeader from "./TopbarHeader";

function Header() {
  const [search, setSearch] = useState();
  const [sidebar, setSidebar] = useState();
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  /*---------add event scroll top----------*/
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const searchFullScreen = () => {
    if (search === false || search === 0) {
      setSearch(1);
      console.log(search);
    } else {
      setSearch(false);
    }
  };

  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "pages":
        return { activeMenu: "pages" };
      case "news":
        return { activeMenu: "news" };
      case "brows":
        return { activeMenu: "brows" };
      case "itwork":
        return { activeMenu: "itwork" };
      case "about":
        return { activeMenu: "about" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }

  return (
    <>
      {/* <TopbarHeader /> */}
      <div className={search === 1 ? "mobile-search slide" : "mobile-search"}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div className="search-cross-btn " onClick={searchFullScreen}>
                {/* <i class="bi bi-search me-4"></i> */}
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area style-1">
        <div className="header-logo">
          <Link to={`${process.env.PUBLIC_URL}/`} onClick={scrollTop}>
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + "/images/bg/header-logo.png"}
            />
          </Link>
        </div>
        <div className={sidebar === 1 ? "main-menu show-menu" : "main-menu"}>
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link to={"/"}>
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + "/images/bg/header-logo.png"}
                />
              </Link>
            </div>
            <div className="menu-close-btn" onClick={handleSidbarMenu}>
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <ul className="menu-list">
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "news" })}
            >
              <Link
                to={"#"}
                className={`${
                  state.activeMenu === "news" ? "active" : ""
                } ${"drop-down"}`}
              >
                Deliver ASAP
              </Link>
              <i className="bx bx-plus dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "news"
                    ? "submenu d-block"
                    : "submenu d-none"
                }
              >
                <li>
                  <NavLink
                    to={`${process.env.PUBLIC_URL}/blog`}
                    onClick={scrollTop}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${process.env.PUBLIC_URL}/blog-Details`}
                    onClick={scrollTop}
                  >
                    Blog Details
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          {/* mobile-search-area */}
        </div>
        <div className="nav-right d-flex align-items-center">
          <div
            className="mobile-menu-btn d-lg-none d-block"
            onClick={handleSidbarMenu}
          >
            <i className="bx bx-menu" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
