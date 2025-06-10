import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { api } from "../../../axios/axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// const api = "https://backend-2-rkqo.onrender.com/api/getHotelDetails"

// const baseUrl = 'https://backend-2-rkqo.onrender.com/api'
//   const baseUrl1 = 'https://backend-2-rkqo.onrender.com'

const HotelProperties = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await api.getAll("getHotelProperty");
        const hotels = Array.isArray(response.data) ? response.data : [];
        console.log(JSON.stringify(response.data));
        setHotelsData(hotels);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        setHotelsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <div>Loading hotel list...</div>;
  if (!hotelsData.length) return <div>No hotels found.</div>;

  return (
    <>
      {hotelsData.slice(0, 7).map((item) => (
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
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                >
                  {item?.hotelImages?.length > 0 ? (
                    item.hotelImages.map((slide, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={slide}
                          alt={`hotel-${i}`}
                          style={{
                            height: "220px",
                            width: "100%",
                            borderRadius: "20px",
                            objectFit: "cover",
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
              <h2 className="text-20 lh-16 fw-500">{item.Propertyname}</h2>
              <p className="text-14">
                {item.Propertyaddress}
              </p>
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
                  {item.roomType || "King Room"}
                </div>
                <div className="text-light-1 text-14">
                  1 extra-large double bed
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
                  ₹{item.Yearofconstruction
 }
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
    </>
  );
};

export default HotelProperties;
