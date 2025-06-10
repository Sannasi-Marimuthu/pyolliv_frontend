import DealsFilter from "./sidebar/DealsFilter";
import SearchBox from "./sidebar/SearchBox";
import PopularFilters from "./sidebar/PopularFilters";
import AminitesFilter from "./sidebar/AminitesFilter";
// import Map from "./sidebar/Map";
// import RatingsFilter from "./sidebar/RatingsFilter";
// import GuestRatingFilters from "./sidebar/GuestRatingFilters";
// import StyleFilter from "./sidebar/StyleFilter";
// import PirceSlider from "./sidebar/PirceSlider";
import PaymentModes from "./sidebar/PaymentModes";
import PriceFilter from "./sidebar/PriceFilter";
import LocationFilter from "./sidebar/LocationFilter";
import UserRating from "./sidebar/UserRating";
import ChainsFilter from "./sidebar/ChainsFilter";
// import HouseRules from "./sidebar/houseRules";
import PropertyType from "./sidebar/PropertyType";
import Amenities from "./sidebar/Amenities";
import HouseRules from "./sidebar/HouseRules";

const Sidebar = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: "#fff",
        }}
      >
        <div className="sidebar__item position-relative">
          <img
            src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            alt="hotel"
            className="rounded-2"
            style={{ height: "200px", width:"100%" }}
          />
        </div>
        {/* End find map */}

        <div className="sidebar__item  ">
          <SearchBox />
        </div>
        {/* End search box */}

        <div
          style={{
            border: "1px solid #cec6c6",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "#f7fff7",
            borderTop: "0",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              border: "1px solid #cec6c6",
              fontSize: "12px",
              paddingInline: "6px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              marginTop: "-1.3rem",
              width: "fit-content",
              marginLeft: "-.5rem",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Suggested For You
          </p>
          <div>
            <h5 className="text-16 fw-500 mb-10  mt-10">
              <i class="icon-chevron-sm-down text-10  mx-2"></i> Previous
              Used Filters
            </h5>
            <div className="sidebar-checkbox ml-20">
              <div className="row y-gap-5 items-center">
                <DealsFilter />
              </div>
            </div>
          </div>
          {/* End used filter */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"> <i class="icon-chevron-sm-down text-10  mx-2"></i>Popular filters</h5>
            <div className="sidebar-checkbox ml-20">
              <PopularFilters />
            </div>
          </div>
          {/* End popular filter */}

          <div>
            <div className="form-checkbox d-flex items-center mt-20 ml-20">
              <input type="checkbox " />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <h4 className="text-16 ml-10">
                Easy Check In <br />
                (6AM to 6PM)
              </h4>
            </div>
          </div>
          {/* End checkin */}

          <div>
            <div className="form-checkbox d-flex items-center mt-20 ml-20">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <h4 className="text-16 ml-10">goStays</h4>
            </div>
          </div>
          {/* End gostays */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"> <i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>Price</h5>
            <div className="sidebar-checkbox ml-20">
              <PriceFilter />
            </div>
          </div>
          {/* End price Filter */}

          <div className=" ">
            <h5 className="text-16 fw-500 mb-10  mt-10">  <i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i> Location</h5>
            <div className="sidebar-checkbox ml-20">
              <div className="row y-gap-5 items-center">
                <LocationFilter />
              </div>
            </div>
          </div>
          {/* End location */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"> <i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>User rating</h5>
            <div className="sidebar-checkbox ml-20">
              <UserRating />
            </div>
          </div>
          {/* End User Rating */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"><i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>Chains</h5>
            <div className="sidebar-checkbox ml-20">
              <ChainsFilter />
            </div>
          </div>
          {/* End Chains */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"><i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>Room Amenities</h5>
            <div className="sidebar-checkbox ml-20">
              <AminitesFilter />
            </div>
          </div>
          {/* End Aminities filter */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"><i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>House Rules</h5>
            <div className="sidebar-checkbox ml-20">
              <HouseRules />
            </div>
          </div>
          {/* End House Rules */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"><i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>Property type</h5>
            <div className="sidebar-checkbox ml-20">
              <PropertyType />
            </div>
          </div>
          {/* End Property types */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"><i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>Amenities</h5>

            <SearchBox />

            <div className="sidebar-checkbox ml-20 mt-10">
              <Amenities />
            </div>
          </div>
          {/* End Property types */}

          <div>
            <h5 className="text-16 fw-500 mb-10 mt-10"><i class="icon-chevron-sm-down text-10 ml-10 mx-2"></i>Payment modes</h5>
            <div className="sidebar-checkbox ml-20">
              <PaymentModes />
            </div>
            {/* End Sidebar-checkbox */}
          </div>
          {/* End Aminities filter */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
