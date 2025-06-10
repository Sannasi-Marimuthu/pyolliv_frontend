import React from 'react'
import './mobilenav.css'
const SideNavbar = () => {
  return (
    <div><div className="mob-card-container1">
              <div className="mob-card1 bg-white">
                <div className="row  m-0 mob-card-flex">
                  <div className="col mob-active">
                    <img
                      src="/img/home_icon/mob/mob-home.png"
                      alt="home"
                      
                    />
                    <span
                      className="badge text-dark"
                    >
                     Home
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="/img/home_icon/mob/mob-con.png"
                      alt="Meet"
                    
                    />
                    <span className="badge rounded-pill text-dark" >
                      Conference
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="/img/home_icon/mob/mob-ollive.png"
                      alt="Olliv"
                  
                    />
                    <span className="badge rounded-pill text-dark">
                      Olliv
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="/img/home_icon/mob/mob-money.png"
                      alt="money"
                      
                    />
                    <span className="badge rounded-pill text-dark">
                     Money
                    </span>
                  </div>
                  <div className="col">
                    <img
                      src="/img/home_icon/mob/mob-booking.png"
                      alt="fly"
                     
                    />
                    <span className="badge rounded-pill text-dark">
                      Booking
                    </span>
                  </div>
                </div>
              </div>
            </div></div>
  )
}

export default SideNavbar