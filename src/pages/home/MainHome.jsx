// import React from "react";
import { Link } from "react-router-dom";
import DefaultFooter from "../../components/footer/default";
import Navbar from "../../components/navbar/Navbar";
import Signature from "../../components/home/signature/Signature";
import TrendingSearch from "../../components/home/TrendingSearch";
import UniqueSelling from "../../components/home/UniqueSelling";
import SideNavbar from "../../components/navbar/common/SideNavbar";
import Hero from "../../components/home/hero/Hero";
import HomeSearch from "../../components/home/search/hotel/home-search/HomeSearch";
import SimilarHotel from "../../components/home/similar-hotel/SimilarHotel";
import "./style/hero.css";
import "../../assets/fonts/font.css";

const MainHome = () => {
  return (
    <>
      {/* SideNavbar start */}
      <div className="mobile-nav">
        <SideNavbar />
      </div>
      {/* SideNavbar end */}
      <div className="mainHome">
        <Navbar />

        {/* Hero start */}
        <div style={{ marginTop: "5em" }} className="container">
          <Hero />
        </div>
        {/* Hero End */}

        {/* Search-Box start*/}
        <div className="container top">
          <HomeSearch />
        </div>
        {/* Search-Box end*/}

        {/* Trending Search At Py-Olliv  start*/}
        <div className="container top">
          <TrendingSearch />
        </div>
        {/* Trending Search At Py-Olliv  end*/}

        {/* similar-hotels start */}
        <div className="container top">
          <div className="relative overflow-hidden  js-section-slider item_gap-x30">
            <SimilarHotel />
          </div>
        </div>
        {/* similar-hotels end */}

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

        {/* Image start */}
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
            {/* Image end */}
        
        <DefaultFooter />
      </div>
    </>
  );
};

export default MainHome;
