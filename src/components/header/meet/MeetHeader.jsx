import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MeetMainMenu from "./MeetMainMenu";
import MeetMobileMenu from "./MeetMobileMenu";
// import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
// import LanguageMegaMenu from "../LanguageMegaMenu";
// import MobileMenu from "./MobileMenu";

const MeetHeader = () => {
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
      {" "}
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`} style={{boxShadow: "2px 2px 3px 2px #aaaaaa", paddingBlock:'10px'}}>
        {/* <div className="header__container px-30 sm:px-20"> */}
        <div className="container  sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link to="/" className="header-logo mr-50">
                  <img src="/img/general/py-ollive-logo.png" alt="logo-icon" />
                  <img src="/img/general/py-ollive-logo.png" alt="logo-icon" />
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MeetMainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            

            <div className="col-auto">
              <div className="d-flex items-center">
               {/* Start btn-group */}
                <div className="header__buttons d-flex items-center is-menu-opened-hide mt-30">
                  <Link
                    to="/#"
                    className=" h-50 px-20 fw-400 text-16 -blue-1 bg-white text-dark-1 sm:d-none"
                  ><img src="https://static-00.iconduck.com/assets.00/profile-major-icon-1024x1024-9rtgyx30.png" alt="" style={{width:"25px", marginRight:"5px"}}/>
                      My Trips
                  </Link>
                  <Link
                    to="/signup"
                    className="h-25 w-400 text-16 -blue-1 bg-white text-dark-1 sm:d-none" style={{border:"1px solid black", padding:'5px', borderRadius:'40px', marginBottom:'20px'}}
                  ><img src="/img/general/pylliove_icon.png" alt="" style={{width:"35px"}}/>
                      Praveen  <i className="icon-chevron-sm-down text-7 ml-10 mx-2"></i>
                  </Link>
                 
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  
                  <div>
                    <Link
                      to="/#"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>


                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MeetMobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default MeetHeader;