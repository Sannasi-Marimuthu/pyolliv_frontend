import React from 'react'

const UniqueSelling = () => {
  return (
    <>
          <div
        
        style={{
          backgroundColor: "#effef0",
         boxShadow: "0 2px 3px 0px #686f68",
          borderRadius: "20px",
          padding: "20px",
          paddingBottom:'40px'
        }}
      >
        <div>
          <h1 className='unique-title' style={{ marginLeft: "20px", color: "#4b5e4b" }}>
            Unique Selling Proposition
          </h1>
        </div>

        <div className= "d-flex flex-row  items-center justify-between mt-10 mx-auto flex-wrap mx-auto">
          {/* <div>
            <div className="d-flex justify-content-evenly">
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px  #888888",
                }}
              >
                Single Price
              </h4>
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Free Refreshment Stay
              </h4>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Free Cancelation
              </h4>
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Technological Advanced gym
              </h4>
            </div>
            <div className="d-flex justify-content-evenly mt-3 mb-4">
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Medical Assistant
              </h4>
              <h4
                className="border-light  py-10 bg-light rounded-3"
                style={{
                  width: "40%",
                  textAlign: "center",
                  boxShadow: "2px 2px #888888",
                }}
              >
                Cutting Edge Conference Room
              </h4>
            </div>
          </div> */}
            <div className="unique-left">
                <p className='unique-item'> Single Price</p>
                <p className='unique-item'>Free Cancelation</p>
                <p className='unique-item'>Medical Assistant</p>
            </div>
            <div className="unique-right">
                <p className='unique-item'> Free Refreshment Stay</p>
                <p className='unique-item'>Technological Advanced gym</p>
                <p className='unique-item'>Cutting Edge Conference Room</p>
            </div>

         
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
    </>
  )
}

export default UniqueSelling