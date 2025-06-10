
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className=" d-flex flex-row justify-content-between flex-wrap">
      <div className="d-flex flex-column">
        <h5 className="text-18 fw-500 mb-5 text-center">Follow Us</h5>
        <div className="d-flex flex-row justify-content-between">
          
          <div className="d-flex flex-row gap-3  mt-2">
         
          <Link to="#">
          <img src="/img/footer/youtube.png" alt="youtube" width={40} />
           
          </Link>
          <Link to="#">
          <img src="/img/footer/insta.png" alt="youtube" width={30} />
           
          </Link>
          <Link to="#">
          <img src="/img/footer/facebook.png" alt="youtube" width={30} />
           
          </Link>
          <Link to="#">
          <img src="/img/footer/twitter.png" alt="youtube" width={30} />
           
          </Link>
          <Link to="#">
          <img src="/img/footer/Linkedin.png" alt="youtube" width={40} style={{marginTop:"-5px"}}  />
           
          </Link>
          
         
        </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <h5 className="text-18 fw-500 mb-5">
          Book faster.Downloded our mobile Apps
        </h5>
        <div className="d-flex justify-content-between ">
          <Link to="#">
          <img src="/img/footer/playstore.png" alt="youtube" width={150} />
           
          </Link>
          <Link to="#">
          <img src="/img/footer/applestore.png" alt="youtube" width={164} />
           
          </Link>
          {/* <AppButton /> */}
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <div className="d-flex flex-row gap-3">
          <a href="#">
            <img src="/img/payment/paytm.png" alt="" width={80} />
          </a>
          <a href="#">
            <img src="/img/payment/rupay.png" alt="" width={80} />{" "}
          </a>
        </div>

        <div className="d-flex flex-row gap-3 mt-10">
          <a href="#">
            {" "}
            <img
              src="/img/payment/visa.png"
              alt=""
              style={{ width: "80px", height: "25px" }}
            />
          </a>
          <a href="#">
            <img
              src="/img/payment/mestro.png"
              alt=""
              style={{ width: "80px", height: "25px" }}
            />{" "}
          </a>
        </div>

        <div className="d-flex flex-row gap-3 ">
          <a href="#">
            <img
              src="/img/payment/paypal.png"
              alt=""
              style={{ width: "100%", height: "80px", marginTop: "-15px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
