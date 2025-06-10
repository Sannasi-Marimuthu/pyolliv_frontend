import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
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
                      className="badge rounded-pill "
                      style={{ backgroundColor: "#4b5e4b", color: "#fff" }}
                    >
                      Olliv Stay
                    </span>
                  </Link>
                </div>
                <div className="col">
                  <Link to="olliv-meet">
                    <img src="/img/home_icon/meet.png" alt="Olliv Meet" />
                    <span className="badge rounded-pill  text-dark">
                      Olliv Meet
                    </span>
                  </Link>
                </div>
                <div className="col">
                  <img src="/img/home_icon/fly.png" alt="Olliv Fly" />
                  <span className="badge rounded-pill text-dark">
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
                  <img src="/img/home_icon/medicare.png" alt="Olliv Medicare" />
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
  );
};

export default Hero;
