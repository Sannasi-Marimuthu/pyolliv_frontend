import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "./common/MobileMenu";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={` header -type-5 ${navbar ? "-header-5-sticky" : ""}`}>
        <div className="header__container container">
          <div className=" row justify-between items-center">
            <div className=" col-auto mobile-col">
              <div className="d-flex items-center">
                <div className="mr-20 d-flex items-center">
                  <div className="mr-15 d-none md:d-flex">
                    <Link
                      to="/login"
                      className="icon-user text-inherit text-22 "
                    />
                  </div>
                  {/* End mobile menu icon */}

                  <button
                    className="d-flex items-center icon-menu text-dark-1 text-20"
                    data-bs-toggle="offcanvas"
                    aria-controls="mobile-sidebar_menu"
                    data-bs-target="#mobile-sidebar_menu"
                  ></button>

                  <div
                    className="offcanvas offcanvas-start  mobile_menu-contnet"
                    tabIndex="-1"
                    id="mobile-sidebar_menu"
                    aria-labelledby="offcanvasMenuLabel"
                    data-bs-scroll="true"
                  >
                    <MobileMenu />
                    {/* End MobileMenu */}
                  </div>
                </div>
                {/* humberger menu */}

                <Link to={"/hotelList"} className="header-logo mr-20">
                  <img src="/img/general/py-ollive-logo.png" alt="logo icon" />
                  <img src="/img/general/py-ollive-logo.png" alt="logo icon" />
                </Link>
                {/* End logo */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                {/* Start btn-group */}
                <div className="header__buttons d-flex items-center is-menu-opened-hide mt-30">
                  
                   <Link
                    to="/signup"
                    className="h-50 fw-400 text-14 -blue-1 text-dark-1 sm:d-none "
                  >
                    <img
                      src="/img/footer/playstore-icon.png"
                      alt=""
                      style={{ width: "25px", marginRight:"25px" }}
                    />
                    {/* Sign In */}
                  </Link>
                  <Link
                    to="/signup"
                    className="h-50 fw-400 text-14 -blue-1 text-dark-1 sm:d-none"
                  >
                    <img
                      src="/img/footer/apple-icon1.png"
                      alt=""
                      style={{ width: "25px", marginRight:"5px"  }}
                    />
                    {/* Sign In */}
                  </Link>
                  
                  <Link
                    to="/#"
                    className=" h-50 px-20 fw-400 text-14 -blue-1 text-dark-1 sm:d-none"
                  >
                    <img
                      src="/img/general/profile-icon.png"
                      alt=""
                      style={{ width: "25px", marginRight: "5px" }}
                    />
                    My Trips
                  </Link>
                  <Link
                    to="/signup"
                    className="h-50 fw-400 text-14 -blue-1 text-dark-1 sm:d-none"
                  >
                    <img
                      src="/img/general/pylliove_icon.png"
                      alt=""
                      style={{ width: "35px" }}
                    />
                    Sign In
                  </Link>
                 
                </div>
                {/* End btn-group */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default Navbar;
