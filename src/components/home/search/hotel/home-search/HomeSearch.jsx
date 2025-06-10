import React from 'react'
import LocationHome from './LocationHome'
import DateSearchHome from './DateSearchHome'
import GuestSearchHome from './GuestSearchHome'
import { Link } from 'react-router-dom'

const HomeSearch = () => {
  return (
    <>
      <div className="mainSearch main-search px-20 py-30 lg:px-10 lg:pt-5 lg:pb-20 ">
            <div className="">
              <div className="search-bg">
                <div className="search-input">
                  {/* LOcation start */}
                  <LocationHome />
                  {/* Location End */}

                  {/* checkIn date start */}
                  <div className="date-search">
                    <div className="searchMenu-date px-10 lg:py-20  sm:px-20 js-form-dd js-calendar d-flex flex-row flex-wrap gap-20 ">
                      <div>
                        <span className="badge rounded-pill date-badge">
                          Check_In
                        </span>
                        <DateSearchHome />
                      </div>
                    </div>
                    {/* checkIn date end */}
                    {/* checkOut date start */}
                    <div className="searchMenu-date px-10 lg:py-20  sm:px-20 js-form-dd js-calendar d-flex flex-row flex-wrap gap-20 ">
                      <div>
                        <span className="badge rounded-pill date-badge">
                          Check_Out
                        </span>
                        <DateSearchHome />
                      </div>
                    </div>
                  </div>

                  {/* checkOut date End */}

                  {/* Start Guests & rooms */}
                  <GuestSearchHome />
                  {/* End Guests & rooms */}
                </div>
              </div>
              {/* start see Booking  option*/}
              <div style={{ marginTop: "1.5em" }}>
                <Link
                  to={"/hotelList"}
                  className="button -md -dark-1 bg-blue-1 text-white search-btn"
                >
                  See Booking Option
                </Link>
              </div>
              {/* end see booking option */}
            </div>
          </div>
    </>
  )
}

export default HomeSearch