import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
// import Overview from "@/components/hotel-single/Overview";
// import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import ModalVideo from "react-modal-video";
import SidebarRight from "../../components/hotel-single/SidebarRight";
import RatingBox from "../../components/hotel-single/RatingBox";
// import PropertyHighlights2 from "@/components/hotel-single/PropertyHighlights2";
// import HotelTabs from "./HotelTabs";

export default function GalleryHotel({ hotel }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
      <section className="pt-40" >
        <div className="container single-hotel"  >
          <div className="hotelSingleGrid">
            <div>
              <Gallery>
                <div className="galleryGrid -type-2" style={{width:"100%"}}>
                  <div className="galleryGrid__item relative d-flex justify-end">
                    <Item
                      original={hotel?.img}
                      thumbnail={hotel?.img}
                      width={660}
                      height={660}
                    >
                      {({ ref, open }) => (
                        <img
                          src={hotel?.img}
                          ref={ref}
                          onClick={open}
                          alt="image"
                          role="button"
                          style={{borderRadius:'20px'}}
                        />
                      )}
                    </Item>
                   
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item">
                    <Item
                      original="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                      thumbnail="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
                          alt="image"
                          style={{borderRadius:'20px'}}
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item">
                    <Item
                      original="https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
                      thumbnail="https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
                      width={450}
                      height={375}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src="https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
                          alt="image"
                          style={{borderRadius:'20px'}}
                          role="button"
                        />
                      )}
                    </Item>
                  </div>
                  {/* End .galleryGrid__item */}

                  <div className="galleryGrid__item relative d-flex justify-end items-end">
                    <img
                      src="https://media.istockphoto.com/id/452626285/photo/hong-kong-hotel-room.jpg?s=612x612&w=0&k=20&c=AibmfrXuTm6pWDV6wvI-X9OEakdMyQKhrDoCR2mgUZ8="
                      alt="image"
                     style={{borderRadius:'20px'}}
                    />
                    <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                      <Item
                        original="https://media.istockphoto.com/id/452626285/photo/hong-kong-hotel-room.jpg?s=612x612&w=0&k=20&c=AibmfrXuTm6pWDV6wvI-X9OEakdMyQKhrDoCR2mgUZ8="
                        thumbnail="https://media.istockphoto.com/id/452626285/photo/hong-kong-hotel-room.jpg?s=612x612&w=0&k=20&c=AibmfrXuTm6pWDV6wvI-X9OEakdMyQKhrDoCR2mgUZ8="
                        width={362}
                        height={302}
                      >
                        {({ ref, open }) => (
                          <div
                            className="button -blue-1 px-24 py-15  text-dark-1 js-gallery"
                            ref={ref}
                            onClick={open}
                            role="button"
                            style={{
                              background:"rgb(64, 78, 62, 0.5)",
                              color:"#fff"
                            }}
                          ><div className="icon-arrow-right mr-15"></div>
                            See All Photos
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                  {/* End .galleryGrid__item */}
                </div>
              </Gallery>
              {/* End gallery grid */}

              <div className="row justify-between items-end pt-10">
                <div className="col-auto">
                  <div className="row x-gap-20  items-center">
                    <div className="col-auto">
                      <h1 className="text-30 sm:text-25 fw-600">
                        {hotel?.title?.slice(0, 30)}
                      </h1>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}

                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-15 text-light-1">
                        <i className="icon-location-2 text-16 mr-5" />
                        {hotel?.location}
                      </div>
                    <p className="text-16">Experience a blend of comfort and luxury at this property featuring stylish rooms, three dining venues,

and a host of amenities.</p>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                <div className="col-auto">
                  <div className="text-22 text-dark-1 fw-500">
                   Amenities
                  <p className="text-14" style={{marginTop:"-.5em"}}>Amenities rated 4.2 by guests</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  
                    <p className="text-14">Restaurant</p>
                    <p className="text-14">Gym</p>
                    <p className="text-14">Indoor Games</p>
                    <p className="text-14">24 hour Room Service</p>
                    <p className="text-14">Bar</p>
                    <p className="text-16" style={{color:"#61aa61"}}>+20 Amenities</p>
               
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

             

            </div>
            {/* End left hotel galler  */}

            <div>
              <SidebarRight/>
              <RatingBox hotel={hotel} />
              
            </div>
            {/* End right content */}

               
          </div>


        </div>
        {/* End .container */}
      </section>
    </>
  );
}
