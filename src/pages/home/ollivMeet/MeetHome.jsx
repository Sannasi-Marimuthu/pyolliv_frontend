// import React from "react";
import { Link } from "react-router-dom";
import DefaultFooter from "../../../components/footer/default/index";
import Navbar from "../../../components/navbar/Navbar";
import Signature from "../../../components/home/signature/Signature";
import TrendingSearch from "../../../components/home/TrendingSearch";
import UniqueSelling from "../../../components/home/UniqueSelling";
import MobileNavbar from "../../../components/navbar/common/SideNavbar";
import LocationMeet from "../../../components/hotel-list/common/meet/LocationMeet";
import DateMeet from "./DateMeet";
import "../style/hero.css";
import "../../../assets/fonts/font.css";
import SimilarHotel from "../../../components/home/similar-hotel/SimilarHotel";

const MeetHome = () => {
  return (
    <>
      <div className="mobbile-nav">
        <MobileNavbar />
      </div>
      <div className="mainHome">
        <Navbar />

        {/* Hero start */}
        <div style={{ marginTop: "5em" }} className="container">
          {/* <svg width="0" height="0" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
                <path d="M0,1 C0.15,0.5 0.85,0.5 1,0 L1,0 L0,0 Z" />
              </clipPath>
              <filter
                id="waveShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="5"
                  dy="-5"
                  stdDeviation="5"
                  flood-color="black"
                  flood-opacity="0.3"
                />
              </filter>
            </defs>
          </svg> */}

          {/* <img src="/img/gallery/video_bg.svg" alt="video_bg" id="waveClip" /> */}

          <div className="hero-section1">
            <div className="content-overlay1">
              <video
                className="video-content1"
                src="/media/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
              ></video>

              <div className="top-left-text1">
                <div className="inner-text1 text-center1">
                  <h4>Find the Top</h4>

                  <p> Hotel Nearby</p>
                </div>
              </div>

              <div className="card-container1">
                <div className="card card1">
                  <div className="row  m-0 card-flex">
                    <div className="col">
                      <Link to="/">
                      <img src="/img/home_icon/stay.png" alt="Olliv Stay" />
                      <span
                        className="badge rounded-pill text-dark"
                       
                      >
                        Olliv Stay
                      </span>
                      </Link>
                    </div>
                    <div className="col">
                      <img src="/img/home_icon/meet.png" alt="Olliv Meet" />
                      <span className="badge rounded-pill"  style={{ backgroundColor: "#4b5e4b", color: "#fff" }}>
                        Olliv Meet
                      </span>
                    </div>
                    <div className="col">
                      <img src="/img/home_icon/fly.png" alt="Olliv Fly" />
                      <span className="badge rounded-pill  text-dark" >
                        Olliv Fly
                      </span>
                    </div>
                    <div className="col">
                      <img src="/img/home_icon/bus.png" alt="Olliv Bus" />
                      <span className="badge rounded-pill text-dark">
                        Olliv Bus
                      </span>
                    </div>
                    <div className="col">
                      <img
                        src="/img/home_icon/medicare.png"
                        alt="Olliv Medicare"
                      />
                      <span className="badge rounded-pill text-dark">
                        Olliv <br /> Medicare
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card2">
                We Bring You Not Only A Stay Option, But An Experience In Your
                Budget To Enjoy The Luxury.
              </div>
            </div>
          </div>
          
        </div>
        {/* Hero End */}

        {/* Search Box */}
        <div className="container top">
          <div className="mainSearch main-search px-20 py-30 lg:px-10 lg:pt-5 lg:pb-20 ">
            <div className="">
              <div className="search-bg">
                <div className="search-input">
                  {/* LOcation start */}
                  <LocationMeet />
                  {/* Location End */}

                  {/* checkIn date start */}
                  <div className="date-search">
                    <div className="searchMenu-date px-10 lg:py-20  sm:px-20 js-form-dd js-calendar d-flex flex-row flex-wrap gap-20 ">
                      <div>
                        <span className="badge rounded-pill date-badge">
                          Event Date
                        </span>
                        <DateMeet />
                      </div>
                    </div>
                    {/* checkIn date end */}
                    {/* checkOut date start */}
                    
                  </div>

                  {/* checkOut date End */}
                <div className="mt-20">
                   <Link
                  to="/meetList"
                  className="-md -dark-1 bg-blue-1 text-white search-btn1" 
                >
                  Search
                </Link>
                </div>
                 <div>
               
              </div>
                </div>
              </div>
              {/* start see Booking  option*/}
              
              {/* end see booking option */}
            </div>
          </div>
        </div>

        {/* Trending Search At Py-Olliv */}
        <div className="container top">
          <TrendingSearch />
        </div>

        {/* Popular hotels */}
        <div className="container top">
          <div className="relative overflow-hidden  js-section-slider item_gap-x30">
           <SimilarHotel />
          </div>
        </div>

        {/* signature start */}
        <div className="container top1">
          <div className="relative overflow-hidden js-section-slider ">
            <Signature />
          </div>
        </div>

        {/* signature end */}
        {/* Unique selling proposition */}
        <div className="container" style={{ marginTop: "2rem" }}>
          <div
            className="relative overflow-hidden js-section-slider item_gap-x30"
            style={{ boxShadow: "0 2px 3px 0px #686f68", borderRadius: "20px" }}
          >
            <UniqueSelling />
          </div>
        </div>

        {/* Image */}

        <div className="container text-center">
          <img
            src="https://rotary-linens.com/cdn/shop/files/resort-supplies_1880x.jpg?v=1716778201"
            alt=""
            style={{
              marginTop: "50px",
              width: "100%",
              height: "400px",
              borderRadius: "16px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        <DefaultFooter />
      </div>
    </>
  );
};

export default MeetHome;
