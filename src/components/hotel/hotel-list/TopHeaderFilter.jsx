const TopHeaderFilter = () => {
  return (
    <>
   
      <div className="row y-gap-10 items-center justify-between right-title-hotel">
        <div className="col-auto">
          <div className="text-14 pt-2">
            <span className="fw-500">25 filters result for Copenhagen,</span>  17 19 Dec,2guests,1 room
            <h5>Breakfast included</h5>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-auto  sort-mobile">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1" style={{boxShadow: "2px 2px 5px 2px #aaaaaa"}}>
                sort by
                <i className="icon-up-down text-14 ml-10" />
              </button>
            </div>
            {/* End .col */}

            <div className="col-auto d-none xl:d-block">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#listingSidebar"
                className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
              >
                <i className="icon-up-down text-14 mr-10" />
                Filter
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
