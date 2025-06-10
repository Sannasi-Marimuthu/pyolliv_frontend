import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import Social from "../Common/Social/Social";
import { useNavigate } from "react-router-dom";

const MeetMobileMenu = () => {
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
            <li className={pathname === "/#" ? "current" : ""}>
              <div className="d-flex justify-content-start align-items-center gap-5 ">
                <img
                  src="/img/home_icon/stay.png"
                  alt="Olliv Stay"
                  width={40}
                />
                <span
                  className="badge rounded-pill"
                  style={{ backgroundColor: "#4b5e4b", color: "#fff" }}
                >
                  Olliv Stay
                </span>
              </div>
            </li>
            {/* End Properties single menu */}
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            <li
              className={pathname === "/#" ? "current" : ""}
              style={{ marginTop: "30px" }}
            >
              <div className="d-flex justify-content-start align-items-center gap-5 ">
                <img
                  src="/img/home_icon/meet.png"
                  alt="Olliv Meet"
                  width={40}
                />
                <span className="badge rounded-pill text-dark">Olliv Meet</span>
              </div>
            </li>
          </MenuItem>
          {/* End  Desitinations Menu */}
          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            <li
              className={pathname === "/#" ? "current" : ""}
              style={{ marginTop: "30px" }}
            >
              <div className="d-flex justify-content-start align-items-center gap-5 ">
               < img src="/img/home_icon/fly.png" alt="Olliv Fly" width={40}/>
                <span className="badge rounded-pill text-dark">Olliv Fly</span>
              </div>
            </li>
          </MenuItem>
          {/* End  Desitinations Menu */}

          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            <li
              className={pathname === "/#" ? "current" : ""}
              style={{ marginTop: "30px" }}
            >
              <div className="d-flex justify-content-start align-items-center gap-5 ">
                <img src="/img/home_icon/bus.png" alt="Olliv Bus" width={40} />
                <span className="badge rounded-pill text-dark">Olliv Bus</span>
              </div>
            </li>
          </MenuItem>
          {/* End  Desitinations Menu */}

          <MenuItem
            onClick={() => navigate("/#")}
            className={pathname === "/#" ? "menu-active-link" : ""}
          >
            <li
              className={pathname === "/#" ? "current" : ""}
              style={{ marginTop: "30px" }}
            >
              <div className="d-flex justify-content-start align-items-center gap-5 ">
                <img
                  src="/img/home_icon/medicare.png"
                  alt="Olliv Medicare"
                  width={40}
                />
                <span className="badge rounded-pill text-dark">
                  Olliv Medicare
                </span>
              </div>
            </li>
          </MenuItem>
          {/* End  Desitinations Menu */}
        </Menu>
      </Sidebar>
    </>
  );
};

export default MeetMobileMenu;
