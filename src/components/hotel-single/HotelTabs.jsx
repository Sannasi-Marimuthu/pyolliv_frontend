import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OverView from "./hotel-tab/OverView";
import FoodBeverage from "./hotel-tab/FoodBeverage";
import PropertyPolicie from "./hotel-tab/PropertyPolicie";
import GuestReview from "./hotel-tab/GuestReview";
import Location from "./hotel-tab/Location";
import SimilarProperties from "./hotel-tab/SimilarProperties";
import UserRating from "./hotel-tab/UserRating";

const HotelTabs = () => {
  const tabs = [
    {
      label: "Over View",
      content: <OverView />
    },
    {
      label: "Food & Beverages",
      content:<FoodBeverage />
    },
    {
      label: "Property Policies",
      content:<PropertyPolicie />
    },
    {
      label: "Guest Reviews",
      content: <GuestReview />
    },
    {
      label: "Location",
      content:<Location />
    },
    {
      label: "User Rating & Reviews",
      content:<UserRating />
    },
    {
      label: "Similar Properties",
      content:<SimilarProperties />
    },
   
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
    <Tabs
      className="tabs -underline-2 js-tabs  "
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      
       <div className="container hotel-tab">
        <div className="border-top-light"></div>
      </div>
      <TabList className="tabs__controls row x-gap-50 y-gap-10 lg:x-gap-20 ml-5" >
        {tabs.map((tab, index) => (
          
          <Tab key={index} className="col-auto mt-3 ">
          
            <button className="tabs__button text-16 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button"   >
              {tab.label}
            </button>
          </Tab>
        ))}
      </TabList>
      <div className="tabs__content pt-30 js-tabs-content mt-10">
        {tabs.map((tab, index) => (
          <TabPanel
            key={index}
            className={`-tab-item-${index + 1} ${
              tabIndex === index ? "is-tab-el-active" : ""
            }`}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </Tabs>
    </div>
  );
};

export default HotelTabs;
