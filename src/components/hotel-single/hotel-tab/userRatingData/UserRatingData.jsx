import React from "react";
import Pagination from "../../../hotel-list/common/Pagination";

const UserRatingData = () => {
  const reviewProgressContent = [
    {
      id: 1,
      reviewReason: "Excellent",
      ratings: "47%",
      progressPercent: "47%",
    },
    {
      id: 2,
      reviewReason: "Very Good",
      ratings: "34%",
      progressPercent: "34%",
    },
    {
      id: 3,
      reviewReason: "Average",
      ratings: "11%",
      progressPercent: "11%",
    },
    {
      id: 4,
      reviewReason: "Poor",
      ratings: "5%",
      progressPercent: "5%",
    },
    { id: 5, reviewReason: "Bad", ratings: "4%", progressPercent: "4%" },
  ];

  return (
    <div>
      <div className="d-flex items-center mt-20 rating-margin" >
        <div
          className="flex-center bg-blue-1 rounded-4 size-40 text-18 fw-600 text-white "
          style={{
            width: "fit-content",
            borderRadius: "20px",
            height: "auto",
            background:
              "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, #497349 100%, rgba(73, 115, 73, 1) 100%)",
              padding:"8px 18px"
          }}
        >
          4.5
        </div>
        <div className="text-1 text-dark- ml-10">
          <h3 style={{ color: "#497349" }}>Very Good</h3>
          <p className="text-12">5421 Ratings, 3255 Reviews</p>
        </div>
      </div>

      <div className="row y-gap-20 pt-20 rating-margin">
        {reviewProgressContent.map((item) => (
          <div className="col-12" key={item.id}>
            <div className="d-flex items-center justify-content-between">
              <div className="text-20 fw-500">{item.reviewReason}</div>
              <div className="progressBar mt-10" style={{ width: "40%" }}>
                <div className="progressBar__bg bg-blue-2" />
                <div
                  className="progressBar__bar bg-blue-1"
                  style={{ width: item.progressPercent }}
                />
              </div>
              <div className="text-18 text-light-1">{item.ratings}</div>
            </div>
          </div>
        ))}

        {/* End .col-md-4 */}
      </div>

      <div className="text-18 text-dark-1  mt-3 rating-margin" >
        <h3 >
          {" "}
          Last 10 Custimer Ratings{" "}
          <span className="text-18 text-light-1">(Latest First)</span>
        </h3>
      </div>

      <div
        className="d-flex justify-content-center items-center mt-3 flex-wrap"
        style={{ gap: "16px" }}
      >
        <p
          style={{
            border: "1px solid gray",
            padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          5
        </p>
        <p
          style={{
            border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          5
        </p>
        <p
          style={{
            border: "1px solid gray",
             padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          4
        </p>
        <p
          style={{
            border: "1px solid gray",
            padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          4
        </p>
        <p
          style={{
            border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          5
        </p>
        <p
          style={{
            border: "1px solid gray",
          padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          4
        </p>
        <p
          style={{
            border: "1px solid gray",
          padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          5
        </p>
        <p
          style={{
            border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
            marginRight: "5px",
          }}
        >
          4
        </p>
        <p
          style={{
            border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#61ab61",
          }}
        >
          5
        </p>
      </div>

      <div className="text-18 text-dark-1  mt-3 rating-margin" >
        <h3> Filter By:</h3>
      </div>

      <div
        className="d-flex justify-content-center items-center mt-3 flex-wrap rating-margin"
        style={{ gap: "16px",}}
      >
        <p
          style={{
            border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          All Reviews
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Service QUALITY
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Food
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Location
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Room Quality
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Breakfast
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Room Cleanliness
        </p>
        <p
          style={{
             border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            marginRight: "10px",
            color: "#002200",
          }}
        >
          Friendly Staff
        </p>
        <p
          style={{
            border: "1px solid gray",
           padding: "5px 10px",
            borderRadius: "5px",
            fontWeight: "bold",
            color: "#002200",
          }}
        >
          Space in Rooms
        </p>
      </div>

      <div>
        <div className="d-flex items-center mt-20 rating-margin" >
          <div
            className="flex-center bg-blue-1 rounded-4 size-40 text-14 fw-600 text-white "
            style={{
              width: "50px",
              borderRadius: "20px",
              height: "40px",
              background:
                "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, #497349 100%, rgba(73, 115, 73, 1) 100%)",
            }}
          >
            4.5
          </div>
          <div className="text-18 text-dark-1  rating-margin" >
            <h5 style={{ color: "#497349" }}>Good</h5>
            <p className="text-16" style={{ color: "#002200" }}>
              ChandranS. Family With 2 Kids
            </p>
          </div>
        </div>
        <div>
          <p className="text-18 text-light-1 rating-margin" >
            Location is very near by to thiruvalur bus sto walk for 10 mins your
            reach Hotel, if you take auto or cab just 3 mints from thiruvalur{" "}
          </p>
          <p className="text-22 text-dark-1 rating-margin" style={{ fontWeight: "bold"}}>
            Travel Month:{" "}
            <span
              className="text-18 text-dark-1"
              style={{ fontWeight: "normal" }}
            >
              May 2025
            </span>{" "}
          </p>
          <p className="text-22 text-dark-1 rating-margin" style={{ fontWeight: "bold" }}>
            Room:{" "}
            <span
              className="text-18 text-dark-1"
              style={{ fontWeight: "normal" }}
            >
              Hablis
            </span>{" "}
          </p>
          <p className="text-18 rating-margin" style={{ color: "#497349" }}>
            Helpful
          </p>
        </div>
      </div>

      
      <div>
        <div className="d-flex items-center mt-20 rating-margin">
          <div
            className="flex-center bg-blue-1 rounded-4 size-40 text-14 fw-600 text-white "
            style={{
              width: "50px",
              borderRadius: "20px",
              height: "40px",
              background:
                "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, #497349 100%, rgba(73, 115, 73, 1) 100%)",
            }}
          >
            4.5
          </div>
          <div className="text-18 text-dark-1  rating-margin" >
            <h5 style={{ color: "#497349" }}>Good</h5>
            <p className="text-16" style={{ color: "#002200" }}>
              ChandranS. Family With 2 Kids
            </p>
          </div>
        </div>
        <div>
          <p className="text-18 text-light-1 rating-margin" >
            Location is very near by to thiruvalur bus sto walk for 10 mins your
            reach Hotel, if you take auto or cab just 3 mints from thiruvalur{" "}
          </p>
          <p className="text-22 text-dark-1 rating-margin" style={{ fontWeight: "bold" }}>
            Travel Month:{" "}
            <span
              className="text-18 text-dark-1"
              style={{ fontWeight: "normal" }}
            >
              May 2025
            </span>{" "}
          </p>
          <p className="text-22 text-dark-1 rating-margin" style={{ fontWeight: "bold" }}>
            Room:{" "}
            <span
              className="text-18 text-dark-1"
              style={{ fontWeight: "normal" }}
            >
              Hablis
            </span>{" "}
          </p>
          <p className="text-18 rating-margin" style={{ color: "#497349" }}>
            Helpful
          </p>
        </div>
      </div>

      
      <div>
        <div className="d-flex items-center mt-20 rating-margin" >
          <div
            className="flex-center bg-blue-1 rounded-4 size-40 text-14 fw-600 text-white "
            style={{
              width: "50px",
              borderRadius: "20px",
              height: "40px",
              background:
                "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, #497349 100%, rgba(73, 115, 73, 1) 100%)",
            }}
          >
            4.5
          </div>
          <div className="text-18 text-dark-1  rating-margin" >
            <h5 style={{ color: "#497349" }}>Good</h5>
            <p className="text-16" style={{ color: "#002200" }}>
              ChandranS. Family With 2 Kids
            </p>
          </div>
        </div>
        <div>
          <p className="text-18 text-light-1 rating-margin" >
            Location is very near by to thiruvalur bus sto walk for 10 mins your
            reach Hotel, if you take auto or cab just 3 mints from thiruvalur{" "}
          </p>
          <p className="text-22 text-dark-1 rating-margin" style={{ fontWeight: "bold" }}>
            Travel Month:{" "}
            <span
              className="text-18 text-dark-1"
              style={{ fontWeight: "normal" }}
            >
              May 2025
            </span>{" "}
          </p>
          <p className="text-22 text-dark-1 rating-margin" style={{ fontWeight: "bold" }}>
            Room:{" "}
            <span
              className="text-18 text-dark-1"
              style={{ fontWeight: "normal" }}
            >
              Hablis
            </span>{" "}
          </p>
          <p className="text-18 rating-margin" style={{ color: "#497349"}}>
            Helpful
          </p>
        </div>
      </div>

      

      <Pagination />
    </div>
  );
};

export default UserRatingData;
