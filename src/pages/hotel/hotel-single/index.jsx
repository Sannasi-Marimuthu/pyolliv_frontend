import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "../../../data/hotels";
// import DefaultHeader from "@/components/header/default-header";
import Header from "../../../components/header/index";
import DefaultFooter from "../../../components/footer/default/index";
// import StickyHeader2 from "@/components/hotel-single/StickyHeader2";
import GalleryHotel from "../../../components/hotel-single/GalleryHotel";
import { useParams } from "react-router-dom";

import MetaComponent from "../../../components/common/MetaComponent";
import HotelTabs from "../../../components/hotel-single/HotelTabs";
// import SimilarHotels from "../../../components/hotel-single/similarHotels/SimilarHotels";
import './style.css'
import HotelFilterSearchBox from "../../../components/hotel-list/HotelFilterSearch";
const metadata = {
  title:
    "Hotel Single || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

const HotelSingleDynamic = () => {
  let params = useParams();
  const id = params.id;
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End DefaultHeader */}
      <div style={{ backgroundColor: "#eef1f7" }}>
        <section
          className=" pb-40 hotel-filter"
         
        >
          <div className="container">
            <div className="row">
              <div className="col-10">
                {/* End text-center */}
                <HotelFilterSearchBox />
              </div>
              {/* End col-12 */}
            </div>
          </div>
        </section>
        {/* End Search filter top */}

        <div className="container">
        <div className="col-12">
            <GalleryHotel hotel={hotel} />
        </div>
        </div>
        

        {/* End gallery grid wrapper */}
        

        <div className="container">
          <div className="col-12 ">
            <HotelTabs />
          </div>
        </div>

        {/* <div className="container">
          <div className="col-12">
            <SimilarHotels />
          </div>
        </div> */}

        <div className="container mt-40">
          <div className="border-top-light"></div>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
};

export default HotelSingleDynamic;
