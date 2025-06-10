import DateList from "./common/DateList";
import GuestList from "./common/GuestList";
import LocationSearch from "./common/LocationSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div>
        <div className="list-search mainSearch  py-10 lg:pt-5 lg:pb-20 ">
          <div className="button-grid items-center justify-content-center">
            <LocationSearch />
            {/* End Location */}

            <div className="searchMenu-date js-form-dd js-calendar">
              <div>
                <span
                  className="badge rounded-pill"
                  style={{ color: "#000", fontWeight: "450" }}
                >
                  Check_In & Check_Out
                </span>
                <DateList />
              </div>
            </div>
            {/* End check-in-out */}

            <GuestList />
            {/* End guest */}
          </div>
        </div>

        <div className="list-search2 mainSearch px-20 py-15 lg:px-10 lg:pt-5 lg:pb-20 ">
          <div className="d-flex button-grid1 items-center justify-content-between flex-wrap">
            <div className="row x-gap-10 y-gap-10">
              <div className="col-auto">
                <h6
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: "#edf3ff",
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Most Popular
                </h6>
              </div>

              <div className="col-auto">
                <h6
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: "#edf3ff",
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Classic
                </h6>
              </div>

              <div className="col-auto">
                <h6
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: "#edf3ff",
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Executive
                </h6>
              </div>
              <div className="col-auto">
                <h6
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: "#edf3ff",
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Py Olliv-Highest First
                </h6>
              </div>
            </div>

            <div>
              <button
                className="list-search-btn d-flex  px-40 h-full col-4 justify-content-end"
                style={{
                    boxShadow: " -2px 5px 10px rgb(177, 184, 181)",
                  width: "fit-content",
                  height: "30px",
                  borderRadius: "30px",
                  backgroundColor: "#eff8f4",
                }}
              >
                <i className="icon-search text-18 mr-5 mt-1" />
                <span style={{ textAlign: "center" }}>
                  {" "}
                  Search Location or Property Name
                </span>
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
