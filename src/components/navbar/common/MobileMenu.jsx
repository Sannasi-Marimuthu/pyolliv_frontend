import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import Social from "../Common/Social/Social";
import ContactInfo from "./ContactInfo";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/py-ollive-logo.png" alt="brand" width={130} />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/" ? "menu-active-link" : ""}
          >
            Home
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Conference
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Olliv
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Money
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            Booking
          </MenuItem>
          {/* End  Desitinations Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        {/* <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div> */}
        <div >
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            to="/login"
          >
            Sign In / Register
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
