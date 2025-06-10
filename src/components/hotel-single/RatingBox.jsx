import { Link } from "react-router-dom";

const RatingBox = ({ hotel }) => {
  const recommendRatings = [
    {
      id: 1,
      name: "Breakfast",
      numberOfRatings: "25",
    },
    {
      id: 2,
      name: "WiFi",
      numberOfRatings: "14",
    },
    {
      id: 3,
      name: "Food & Dining",
      numberOfRatings: "67",
    },
  ];

  return (
    <div className="px-10 py-10  rounded-5 rating-box" >
      <div className="d-flex items-center">
        <div className=" ml-10">
          <div className="text-18 lh-15 fw-500" style={{ color: "#4d924d" }}>
            Exceptional
          </div>
          <div className="text-16 lh-15 fw-500">₹3,499</div>
        </div>
      </div>
      <Link
        to={`#`}
        className="button1 -md -dark-1  text-white"
        style={{
          borderRadius: "10px",
          height: "auto",
          width: "content-fit",
          background:
            "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, rgba(73, 115, 73, 1) 100%, rgba(73, 115, 73, 1) 100%)",
            padding:"5px 10px"
        }}
      >
        Book this Now
      </Link>
      {/* End d-flex */}

      <div className="border-top-light mt-10 mb-20" />

      <div>
        <div className="d-flex justify-content-between items-center">
          <div>
            <Link
              to={`#`}
              className="button -md -dark-1  text-white"
              style={{
                borderRadius: "10px",
                width: "content-fit",
                background:
                  "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, rgba(73, 115, 73, 1) 100%, rgba(73, 115, 73, 1) 100%)",
                    padding:"10px 25px"
              }}
            >
              4.5
            </Link>
          </div>
          <div className="d-flex flex-column">
            <h5 className="text-16" style={{ color: "#0000e7", textAlign:"start" }}>
              Excellent
            </h5>
            <p className="text-14">(1743 ratings)</p>
          </div>
          <div className="text-14" style={{ color: "#4d924d" }}>
            All Reviews
          </div>
        </div>

        <div className="d-flex justify-content-between items-center mt-10">
          <div>
            <img
              src="https://img.freepik.com/free-vector/clean-black-world-map-silhouette-style-template-design_1017-46154.jpg?semt=ais_hybrid&w=740"
              alt="map"
              width={60}
              style={{ border: "1px solid gray", borderRadius: "10px" }}
            />
          </div>
          <div className="d-flex flex-column">
            <h5 className="text-16" style={{color: "#0000e7" }}>
              City Centre
            </h5>
            <p className="text-14"> city centre, Chennai</p>
          </div>
          <div className="text-14" style={{ color: "#4d924d" }}>
            See on Map
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingBox;
