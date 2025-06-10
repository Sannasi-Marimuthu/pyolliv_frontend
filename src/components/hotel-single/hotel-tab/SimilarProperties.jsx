import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { hotelsData } from "../../../data/hotels";

const SimilarProperties = () => {
  return (
    <div >
      <div
        className={`bg-white rounded-4 px-50 sm:px-20 sm:py-20 `}
        style={{
          boxShadow: "2px 2px 3px 0px #686f68",
          marginTop: "1em",
          marginInline: "5px",
        }}
      >
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Similar Properties</h2>
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto tabs -pills-2 ">
            <div className="tabs__controls row x-gap-10 justify-center js-tabs-controls"></div>
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}

        <div className="relative sm:pt-20">
          <div className="row y-gap-30">
            <Swiper
              spaceBetween={30}
              modules={[Navigation]}
              navigation={{
                nextEl: ".js-filter2-next",
                prevEl: ".js-filter2-prev",
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
                  slidesPerView: 4,
                },
              }}
            >
              {hotelsData?.slice(11, 16)?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div
                    style={{
                      boxShadow: ".5px 0px 0px 2px rgba(0, 0, 0, 0.4)",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  >
                    <div className="hotelsCard__image bg-white">
                      <div className="cardImage ratio ratio-1:1">
                        <div className="cardImage__content">
                          <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
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
                                    className=" col-12 js-lazy"
                                    src={slide}
                                    alt="image"
                                    style={{
                                      borderRadius: "20px",
                                      boxShadow:
                                        ".5px 0px 0px 2px rgba(0, 0, 0, 0.4)",
                                    }}
                                  />
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                      {/* End .cardImage */}
                    </div>
                    <div className="hotelsCard__content mt-10">
                      <h4 className="hotelsCard__title text-dark-1 text-18  fw-500">
                        <span>{item?.title}</span>
                      </h4>
                      <p className="text-light-1 lh-14 text-12 mt-5">
                        3-star located in the heard of Copenhagen
                      </p>
                      <div className="d-flex items-center mt-20">
                        <div
                          className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white "
                          style={{
                            background:
                              "linear-gradient(90deg,rgba(97, 171, 97, 1) 25%, rgba(73, 115, 73, 1) 100%, rgba(73, 115, 73, 1) 100%)",
                          }}
                        >
                          {item?.ratings}
                        </div>
                        <div className="text-14 text-dark-1 fw-500 ml-10">
                          Exceptional
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <div >
                            <div className="text-14">
                              Free Cancellation <br />
                              <span className="text-14">Free Wifi</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div >
                            <div className="text-18" style={{fontWeight:'bold', color:"#61ab61"}}>
                              ₹2,499 
                              <p className="text-14" style={{color:"#000", fontWeight:"normal", marginTop:"-5px"}}>Free Wifi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-filter2-prev">
              <i className="icon icon-chevron-left text-12" />
            </button>
            <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-filter2-next">
              <i className="icon icon-chevron-right text-12" />
            </button>
          </div>
        </div>
        {/* End relative */}
      </div>
    </div>
  );
};

export default SimilarProperties;
