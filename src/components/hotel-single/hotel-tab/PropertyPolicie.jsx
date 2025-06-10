
const PropertyPolicie = () => {
  return (
    <>
       <div>
        <div className="rounded-4 bg-white px-10 py-30 sm:px-20 sm:py-20"  style={{ boxShadow: "1px 2px 2px 2px #686f68" }}>
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Property Rules</h3>
              <div className="text-14 ">Check-in: 12 PM - Check OUT: 12 PM</div>
            </div>
          </div>
          {/* End .row */}

          <div className="row x-gap-50 y-gap-30 d-flex">
            <div>
              <div className="d-flex justify-content-around hotel-policie">
                <div className="mt-30">
                  <div className="row x-gap-50 y-gap-5 ">
                    <div className="col-12">
                      <div className="text-15">
                        Unmarried couple/guest with local Ids are allowed.
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="text-15">
                        Primary guest should be atlest 18 years of age
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="text-15">
                        Passport,Adhaar and Driving License are accepted as ID
                        proof(s)
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="row x-gap-50 y-gap-5 pt-10">
                    <div className="col-12">
                      <div className="text-15">Pets are not allowed</div>
                    </div>

                    <div className="col-12">
                      <div className="text-15">outside food is not allowed</div>
                    </div>

                    <div className="col-12">
                      <div className="text-15">
                        Smoking within the premises is not allowed
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="text-15">
                        Optional:Rollaway bed fee:INR 1227 per stay
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex button-grid1 items-center justify-content-between mt-2">
                <div className="row x-gap-10 y-gap-10">
                  <div className="col-auto">
                    <p
                      className="rounded-10 py-5 px-10 text-14 lh-14"
                      style={{
                        color: "#000",
                        borderRadius:"5px",
                        border:'1px solid lightgray'
                       
                      }}
                    >
                      Must Read Rules
                    </p>
                  </div>

                  <div className="col-auto">
                    <p
                      className="rounded-10 py-5 px-10 text-14 lh-14"
                      style={{
                        color: "#000",
                        borderRadius:"5px",
                        border:'1px solid lightgray'
                      }}
                    >
                      Guest Profile
                    </p>
                  </div>

                  <div className="col-auto">
                    <p
                      className="rounded-10 py-5 px-10 text-14 lh-14"
                      style={{
                        color: "#000",
                        borderRadius:"5px",
                      border:'1px solid lightgray'
                      }}
                    >
                      Guest Profile (Hourly)
                    </p>
                  </div>

                  <div
                   
                      className="d-flex  px-40 h-full col-4 justify-content-end"
                      style={{
                       
                        width: "auto",
                        height: "30px",
                        borderRadius: "30px",
                        color:"blue",
                        fontSize:"14px",
                        marginTop:"5px"
                      }}
                    >
                    
                      <span style={{ textAlign: "center" }}>
                        {" "}
                        Read All Property Rules
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .pt-40 */}
      </div>
    </>
  )
}

export default PropertyPolicie