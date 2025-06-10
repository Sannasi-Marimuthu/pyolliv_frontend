import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { hotelsData } from "../../../data/hotels";
// import { hotelsData } from "../../data/hotels";
// import isTextMatched from "../../utils/isTextMatched";

const SimilarHotel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-hotels-next",
          prevEl: ".js-hotels-prev",
        }}
        pagination={{
          el: ".js-hotels-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {hotelsData.slice(0, 8).map((item) => (
          <SwiperSlide key={item?.id} className="swiper-slide-hotel">
            <Link
              to={`/hotel-single-v1/${item.id}`}
              className="hotelsCard -type-1 hover-inside-slider"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="hotelsCard__image">
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content">
                    <div className="cardImage-slider  overflow-hidden custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.slideImg?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <img
                              className="rounded-4 col-12 js-lazy"
                              src={slide}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
                {/* End .cardImage */}
              </div>

              <div className="d-flex items-center mt-3 ">
                <div
                  className="text-blue-1 text-dark"
                  style={{
                    border: "1px solid black",
                    borderRadius: "15px",
                    paddingInline: "10px",
                  }}
                >
                  <h6>{item?.basic}</h6>
                </div>
                <div
                  className="text-blue-1  mx-2"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "15px",
                    paddingInline: "10px",
                  }}
                >
                  <h6 style={{ color: "gray" }}>{item?.premium}</h6>
                </div>
              </div>

              <div className="hotelsCard__content mt-10">
                <h5 className="hotelsCard__title text-dark-1  lh-16 fw-600">
                  <span>{item?.title}</span>
                </h5>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Destination
                    </p>
                    <p
                      className="text-dark-1 lh-14 text-14 mt-5"
                      style={{
                        color: "#454545",
                      }}
                    >
                      <i className="icon-location text-15 mr-10" />
                      {item?.location}
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      Duration
                    </p>
                    <p
                      className="text-dark-1 lh-14 text-14 mt-5"
                      style={{
                        color: "#454545",
                      }}
                    >
                      <i className="icon-clock text-15 mr-10" />{" "}
                      {item?.duration}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between items-center">
                  <div className="mt-5 d-flex flex-column">
                    <div className="text-14" style={{ color: "#454545" }}>
                      Start from{" "}
                    </div>
                    <div className=" text-bold">
                      <h3>$ {item?.price}</h3>
                    </div>
                  </div>
                  <button
                    href="#"
                    className="button bg-blue-1 text-white  rounded-10"
                    style={{
                      height: "40px",
                      borderRadius: "20px",
                      width: "100px",
                      backgroundColor: "#4c5e4c",
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center sm:justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End .prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-hotels-pag" />
        </div>
        {/* End .pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End .next */}
      </div>
      {/* End navigation and pagination */}
    </>
  );
};

export default SimilarHotel;
