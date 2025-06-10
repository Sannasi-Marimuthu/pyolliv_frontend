import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MeetMainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        

        <li className={pathname === "/#" ? "current" : ""} style={{marginRight:"30px"}}>
            <Link to="/hotelList" >
            <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                      <img src="/img/home_icon/stay.png" alt="Olliv Meet" width={40} />
                      <span className="badge rounded-pill text-dark">
                        Olliv stay
                      </span>
                    </div>
          </Link>
        </li>
        {/* End Properties single menu */}

         <li className={pathname === "/#" ? "current" : ""} style={{marginRight:"30px"}}>
         <Link to="/meetList" >
             <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                      <img src="/img/home_icon/meet.png" alt="Olliv Meet" width={50} />
                      <span className="badge rounded-pill " style={{ backgroundColor: "#4b5e4b", color: "#fff" }}>
                        Olliv Meet
                      </span>
                    </div>
         </Link>
        </li>
        {/* End Attractions single menu */}

         <li className={pathname === "/#" ? "current" : ""}  style={{marginRight:"30px"}}>
          <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                      <img src="/img/home_icon/fly.png" alt="Olliv Fly"  width={45}/>
                      <span className="badge rounded-pill text-dark">
                        Olliv Fly
                      </span>
                    </div>
        </li>F
        {/* End Destinatinos single menu */}
         <li className={pathname === "/#" ? "current" : ""}  style={{marginRight:"30px"}}>
          <div  className="d-flex flex-column justify-content-center align-items-center gap-1">
                      <img src="/img/home_icon/bus.png" alt="Olliv Bus" width={65}/>
                      <span className="badge rounded-pill text-dark">
                        Olliv Bus
                      </span>
                    </div>
        </li>
        {/* End Destinatinos single menu */}
         <li className={pathname === "/#" ? "current" : ""} style={{marginRight:"50px"}}>
          <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                      <img
                        src="/img/home_icon/medicare.png"
                        alt="Olliv Medicare" width={45}
                      />
                      <span className="badge rounded-pill text-dark">
                        Olliv Medicare
                      </span>
                    </div>
        </li>
        {/* End Destinatinos single menu */}

       
       
      </ul>
    </nav>
  );
};

export default MeetMainMenu;



