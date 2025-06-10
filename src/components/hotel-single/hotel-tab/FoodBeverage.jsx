import React from 'react'

const FoodBeverage = () => {
  return (
      <div className="container">
          <div className="row" >
            <div className="col-12 bg-light-2"  style={{  boxShadow: "1px 2px 2px 2px #686f68", borderRadius:"5px" }}>
              <div className="px-24 py-20 rounded-4 ">

                <div className="col-12">
              <h3 className="text-22 fw-500">Food & Dining</h3>
              <h5 className="text-16 ">Spice it (Casual Dining)</h5>
            </div>

                <div className="row x-gap-20 y-gap-20 items-center mt-3">
                  <div className="col-auto">
                    <div className="flex-center size-80 rounded-full bg-white">
                      <img src="/img/general/food.png" alt="icon" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <p className="text-18 lh-15 fw-500">
                      Both Vegetarian & No-Vegetarian food 
                    </p>
                     <p className="text-18 lh-15 fw-500 mt-3">
                      Breakfast <span className='text-black'>6:30 AM - 10:30 AM</span> Lunch <span className='text-black'>12:30 PM - 03:30 PM </span>Dinner <span className='text-black'>7:00 PM - 11:00 PM</span>
                    </p>
                     <p className="text-18 lh-15 fw-500 mt-3">
                     Cuisines:North Indian, South Indian, Chinese,Asian, Other Local Cuisines
                    </p>
                  </div>
                </div>

                <div className="col-auto mt-3"  style={{border:"1px solid gray", borderRadius:"5px" , padding:'20px'}}>
                    <p className="text-16 lh-15 fw-500">
                      Non-veg food is allowed
                    </p>
                     <p className="text-16 lh-15 fw-500 mt-2">
                     Food from out side is allowed
                    </p>
                     <p className="text-16 lh-15 fw-500 mt-3">
                    Food delivery from Zomato and other apps is allowed
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FoodBeverage