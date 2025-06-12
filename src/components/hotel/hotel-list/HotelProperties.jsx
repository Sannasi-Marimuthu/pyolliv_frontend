import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as SwiperPagination } from "swiper";
import { Link } from "react-router-dom";
// import { api } from "../../../axios/axios";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HotelProperties = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    let isMounted = true; // to prevent state update on unmounted component
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://backend-2-rkqo.onrender.com/api/getHotelList"
        );
        const hotels = Array.isArray(response.data) ? response.data : [];
        if (isMounted) {
          setHotelsData(hotels);
          console.log("Hotel data:", hotels);
        }
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        if (isMounted) setHotelsData([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchHotels();

    return () => {
      isMounted = false; // cleanup
    };
  }, []);

  const totalPages = Math.ceil(hotelsData.length / itemsPerPage);

  const paginatedHotels = hotelsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) return <div>Loading hotel list...</div>;
  if (!hotelsData.length) return <div>No hotels found.</div>;

  return (
    <>
      {paginatedHotels.map((item) => (
        <div className="col-12" key={item._id}>
          <div
            className="row hotel-list-padding"
            style={{
              boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              paddingTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="col-md-auto">
              <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                <Swiper
                  className="mySwiper"
                  modules={[SwiperPagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                >
                  {item?.images?.[0]?.Coverimage?.length > 0 ? (
                    item.images[0].Coverimage.map((slide, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={`https://backend-2-rkqo.onrender.com/uploads/${slide.replace(
                            /\\/g,
                            "/"
                          )}`}
                          alt={`hotel-${i}`}
                          style={{
                            width: "100%",
                            borderRadius: "20px",
                            objectFit: "cover",
                            height: "auto",
                          }}
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <img
                        src="https://www.shutterstock.com/image-photo/cheap-hotel-room-double-bed-600nw-2595537199.jpg"
                        alt="default"
                        style={{
                          height: "220px",
                          width: "100%",
                          borderRadius: "20px",
                          objectFit: "cover",
                        }}
                      />
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
            </div>

            <div className="col-md right-title-hotel">
              <h2 className="text-20 lh-16 fw-500">
                {item.categories[0].Name}
              </h2>
              <p className="text-14">{item.categories[0].From}</p>
              <p className="text-14">
                Free cancellation. <span>Breakfast included</span>
              </p>
              <p
                style={{
                  color: "#4768a7",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                &more
              </p>

              <div className="lh-15 mt-10">
                <div className="fw-500 text-16">
                  {item.categories[0].Category}
                </div>
                <div className="text-light-1 text-14">
                  {item.roomtypes?.[0]?.Bedinfo ?? "N/A"}
                </div>
                <div className="text-light-1 text-14">1 bathroom</div>
              </div>

              <div className="row x-gap-10 y-gap-10 mt-1">
                <div className="col-auto">
                  <p className="tag">#classic</p>
                </div>
                <div className="col-auto">
                  <p className="tag">#executive</p>
                </div>
              </div>
            </div>

            <div className="col-md-auto text-right md:text-left right-title-hotel">
              <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                <div className="col-auto">
                  <p className="text-18 fw-500" style={{ color: "#4f934f" }}>
                    Excellent
                  </p>
                  <p className="text-12 text-light-1">920 reviews</p>
                </div>
                <div className="col-auto">
                  <div
                    className="flex-center fw-600 text-14"
                    style={{
                      borderRadius: "20px",
                      width: "40px",
                      height: "30px",
                      backgroundColor: "#d2ffd2",
                      color: "#4f934f",
                    }}
                  >
                    {item.starRating || "N/A"}
                  </div>
                </div>
              </div>

              <div className="list-hotel-price mt-2">
                <div className="text-22" style={{ color: "#4f934f" }}>
                  ₹{item.prices?.[0]?.Price ?? "N/A"}
                </div>
                <div className="text-14 text-light-1 fw-600 mt-5">
                  3 nights, 2 guests
                </div>
                <Link
                  to={`/hotel-single/${item._id}`}
                  className="button -md -dark-1 mt-2 text-white"
                  style={{
                    borderRadius: "10px",
                    height: "30px",
                    background:
                      "linear-gradient(90deg, rgb(97, 171, 97) 25%, rgb(73, 115, 73) 100%)",
                  }}
                >
                  See Booking Option
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="pagination row x-gap-10 y-gap-10 justify-center mt-20">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="button -blue-1 size-40 rounded-full border-light"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const showFirstPages = page <= 4;
          const showLastPages = page >= totalPages - 1;
          const showCurrentAround = Math.abs(currentPage - page) <= 1;

          if (showFirstPages || showLastPages || showCurrentAround) {
            return (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`button size-40 rounded-full ${
                  currentPage === page ? "bg-dark-1 text-white" : "border-light"
                }`}
              >
                {page}
              </button>
            );
          }

          if (page === 5 && totalPages > 8) {
            return (
              <span key="dots-start" className="button size-40">
                ...
              </span>
            );
          }

          if (page === totalPages - 2 && totalPages > 8) {
            return (
              <span key="dots-end" className="button size-40">
                ...
              </span>
            );
          }

          return null;
        })}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="button -blue-1 size-40 rounded-full border-light"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default HotelProperties;
