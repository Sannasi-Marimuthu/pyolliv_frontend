import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay, Pagination } from "swiper";
// import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { signatureData } from "../../../data/signature";
// import isTextMatched from "../../utils/isTextMatched";

const Signature = () => {
  return (
    <>
      <div className="swiper-container">
        <h1 className="title-sign">Signature</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          breakpoints={{
            560: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="sign-swiper"
        >
          {signatureData.slice(0, 5).map((item) => (
            <SwiperSlide key={item?.id} className="swiper-slide">
              {/* <Link
                to={`/#`}
                className="hotelsCard -type-1 hover-inside-slider"
                data-aos="fade"
                data-aos-delay={item.delayAnimation}
              > */}
              <div className="slide-content">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
                      <path d="M0,1 C0.2,0.4 0.9,0.5 1,0 L1,1 L0,1 Z" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="signature-card">
  {item?.slideImg?.map((slide, index) => (
    <img
      key={`${slide}-${index}`}
      className="js-lazy"
      src={slide}
      alt={`slide-${index}`}
      loading="lazy"
    />
  ))}

  <div className="wave"></div>
  <div className="wave-text">
    <h4>{item?.title}</h4>
    <p>{item?.para1}</p>
    <p>{item?.para2}</p>
  </div>
</div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* End navigation and pagination */}
    </>
  );
};

export default Signature;
