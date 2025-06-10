// import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import TopHeaderFilter from "../../../components/hotel/hotel-list/TopHeaderFilter";
import Pagination from "../../../components/hotel/hotel-list/common/Pagination";
import Sidebar from "../../../components/hotel/hotel-list/Sidebar";
import MetaComponent from "../../../components/common/MetaComponent";
import HeaderHotelList from "../../../components/hotel/hotel-list/header/HeaderHotelList";
import HotelListSearchBox from "../../../components/hotel/hotel-list/search/HotelListSearchBox";
import HotelProperties from "../../../components/hotel/hotel-list/HotelProperties";
import "./style.css";

const metadata = {
  title: "Hotel List || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

const HotelList = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <HeaderHotelList />
      {/* End Header */}
      <div style={{ backgroundColor: "#ecf0f7" }}>
        <section
          className="hotel-list-search "
          // style={{ marginLeft: "10em", marginTop: "5em" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-10">
                <HotelListSearchBox />
              </div>
            </div>
          </div>
        </section>
        {/* Top SearchBanner */}

        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-xl-3">
                <aside className="sidebar y-gap-40 xl:d-none">
                  <Sidebar />
                </aside>
                {/* End sidebar for desktop */}

                <div
                  className="offcanvas offcanvas-start"
                  tabIndex="-1"
                  id="listingSidebar"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">
                      Filter Hotels
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* End offcanvas header */}

                  <div className="offcanvas-body">
                    <aside className="sidebar y-gap-40  xl:d-block mt-1">
                      <Sidebar />
                    </aside>
                  </div>
                  {/* End offcanvas body */}
                </div>
                {/* End mobile menu sidebar */}
              </div>
              {/* End col */}
              {/*  */}
              <div className="col-xl-9 ">
                <div className="col-auto float-end sort-desk">
                  <button
                    className="button -blue-1  rounded-100 bg-blue-1-05 text-15 text-blue-1 mb-5 "
                    style={{ boxShadow: "0 2px 3px 0px #686f68", marginRight:"1.5em", paddingBlock:"8px", paddingInline:"15px"}}
                  >
                    sort by
                    <i className="icon-up-down text-14 ml-10" />
                  </button>
                </div>
                <div className="right-header"
                 
                >
                  <div>
                    <TopHeaderFilter />
                    <div className="mt-30"></div>
                    {/* End mt--30 */}
                    <div className="row y-gap-30">
                      <HotelProperties />
                    </div>
                    {/* End .row */}
                    <Pagination />
                  </div>
                </div>
              </div>
              {/* End .col for right content */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End layout for listing sidebar and content */}

        {/* <CallToActions /> */}
        {/* End Call To Actions Section */}

        <DefaultFooter />
      </div>
    </>
  );
};

export default HotelList;
