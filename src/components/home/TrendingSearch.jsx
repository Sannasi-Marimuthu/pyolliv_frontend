import React from "react";

const TrendingSearch = () => {
  return (
    <>
{/*    
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="waveClip2" clipPathUnits="objectBoundingBox">
            <path d="M0,1 C0.15,0.5 0.85,0.5 1,0 L1,0 L0,0 Z" />
          </clipPath>
        </defs>
      </svg> */}

      <div>
      
      <div className="section" style={{ boxShadow: "0px 0px 2px 2pxrgb(121, 122, 121)" }}>
         
           
        <div className="right">
          <img
            src="/img/gallery/hotel.png"
            alt="Hotel"
          />
        </div>
        <div className="left">
     <h3 className="heading" style={{ color: "#2f5731" }}>
        Trending Search At Py-Olliv
      </h3>{" "}
            
          <div className="item">
            <img src="/img/home_icon/beach.png"  />
            <span>Beach Getaways In Goa</span>
          </div>

          <div className="item">
            <img src="/img/home_icon/business.png" />
            <span>Business Stays In Bengaluru</span>
          </div>

          <div className="item">
            <img src="/img/home_icon/nature.png" />
            <span>Nature Retreats In Kochi</span>
          </div>

          <div className="item">
            <img src="/img/home_icon/hill_station.png" />
            <span>Hill Station Escape In Shimla</span>
          </div>
        </div>
      </div>
      
      </div>
    </>
  );
};

export default TrendingSearch;
