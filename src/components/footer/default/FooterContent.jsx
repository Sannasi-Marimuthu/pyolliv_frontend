import { Link } from "react-router-dom";
import footerDataContent from "../../../data/footerContent";

const FooterContent = () => {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-18  mb-5" style={{fontWeight:"bold"}}>{item.title}</h5>
          <div className="d-flex flex-column text-14" style={{color:"#4b5261", marginTop:"-2px"}}>
            {item.menuList.map((menu, i) => (
              <Link to={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
