import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
function Footer(props) {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-3 col-md-6"></div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                  <h5>POPULAR SUBURBS</h5>
                  <ul className="footer-list">
                    <li>
                      <Link onClick={scrollTop} to="/">
                        Castle Hill
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} to="/">
                        Kellyville
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} to="/">
                        Cherrybrook
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} to="/">
                        Baulkham Hills
                      </Link>
                    </li>
                    <li>
                      <Link onClick={scrollTop} to="/">
                        Pennant Hills
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
                <div className="footer-item">
                  <h5>Help &amp; FAQs</h5>
                  <ul className="footer-list">
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        PAGES
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        Shop Registration
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        Shop & Drive for Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h5>KEEP IN TOUCH</h5>
                  <ul className="footer-list">
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        Help Centre
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={scrollTop}>
                        <i className="bx bxl-facebook text-light social-icn" />
                      </Link>
                      <Link to="/" onClick={scrollTop}>
                        <i className="bx bxl-instagram text-light social-icn" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
