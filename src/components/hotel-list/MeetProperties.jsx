
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { Link } from "react-router-dom";
import { meetData } from "../../data/meet";

const MeetProperties = () => {
  return (
    <>
      {meetData.slice(0, 7).map((item) => (
        <div className="col-12" key={item?.id} >
          <div>
            
            <div style={{boxShadow: "0 6px 8px rgba(0, 0, 0, 0.1)", borderRadius:'20px', paddingTop:'20px'}}>


            <div className="row hotel-list-padding">
              <div className="col-md-auto" >
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4"  >
                  <div className="cardImage__content" >
                    <div className="cardImage-slider rounded-4  custom_inside-slider">
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
                              className="col-12 js-lazy"
                              src={slide}
                              alt="image"
                              style={{height:'220px',width:"100%", borderRadius:'20px'}}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End image */}
                </div>
              </div>
              {/* End .col */}

              <div className="col-md right-title-hotel">
                <h2 className="text-20 lh-16 fw-500">{item?.title}</h2>

                <div className="row x-gap-10 y-gap-10 items-center">
                  <div className="col-auto">
                    <p className="text-14">{item?.location}</p>
                  </div> 
                </div>

                <div >
                  <p className="text-14">Free cancellation. </p>
                  <p style={{color:"#4768a7", fontWeight:"bold", fontSize:'12px'}} >&more</p>
                </div>

                <div className=" lh-15 mt-10">
                  <div className="fw-500 text-16">Conference Room</div>
                  <div className="text-light-1 text-14">Minimum <span style={{color:"#000"}}>15 People</span></div>
                  <div className="text-light-1 text-14">Minimum <span style={{color:"#000"}}>150 People</span></div>
                </div>
                <div className="row x-gap-10 y-gap-10 mt-1">
                  <div className="col-auto">
                    <p className=" rounded-100 px-5 text-12 lh-14" style={{color:"#4768a7", fontWeight:"bold", border:"1px solid #4768a7",paddingBlock:"3px"}}>
                      #Wi-fi
                    </p>
                  </div>
                  <div className="col-auto">
                    <p className=" rounded-100 px-5 text-12 lh-14" style={{color:"#4768a7", fontWeight:"bold", border:"1px solid #4768a7",paddingBlock:"3px"}}>
                      #Parking
                    </p>
                  </div>
                  <div className="col-auto">
                    <p className=" rounded-100 px-5 text-12 lh-14" style={{color:"#4768a7", fontWeight:"bold", border:"1px solid #4768a7",paddingBlock:"3px"}}>
                      #Stage
                    </p>
                  </div>
                  <div className="col-auto">
                    <p className=" rounded-100 px-5 text-12 lh-14" style={{color:"#4768a7", fontWeight:"bold", border:"1px solid #4768a7",paddingBlock:"3px"}}>
                      #AC
                    </p>
                  </div>

                  <div className="col-auto">
                    <p className=" rounded-100  px-5 text-12 lh-14" style={{color:"#4768a7", fontWeight:"bold", border:"1px solid #4768a7",paddingBlock:"3px"}}>
                      #Projector
                    </p>
                  </div>

                </div>
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left right-title-hotel">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <p className="text-18 lh-14 fw-500" style={{color:'#4f934f'}}>Excellent</p>
                    <p className="text-12 lh-14 text-light-1">
                      920 reviews
                    </p>
                  </div>
                  <div className="col-auto ">
                    <div className="flex-center  fw-600 text-14 size-40" style={{borderRadius:"20px", width:"40px", height:'30px', backgroundColor:"#d2ffd2" , color:"#4f934f"}}>
                      {item?.ratings}
                    </div>
                  </div>
                </div>

                <div className="list-hotel-price">
                  <div className="text-22   md:mt-20" style={{color:"#4f934f"}}>
                    {item?.price}
                  </div>
                  <div className="text-14 text-light-1 lh-12 fw-600 mt-5">
                    3 hours
                  </div>
                

                  <Link
                    to={`/hotel-single/${item.id}`}
                    className="button -md -dark-1 mt-2 text-white  right-title-hotel-btn" style={{borderRadius:"10px", height:"30px",  background: "linear-gradient(90deg, rgb(97, 171, 97) 25%, rgb(73, 115, 73) 100%, rgb(73, 115, 73) 100%)", 
    }}
                  >
                    See Booking Option
                  </Link>
                </div>
                
              </div>
            </div>

            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default MeetProperties;
