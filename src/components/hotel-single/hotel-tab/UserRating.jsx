import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UserRatingData from "./userRatingData/UserRatingData";

const UserRating = () => {
  const tabs = [
    {
      label: "Everyone ",
      content: <UserRatingData />,
    },
    {
      label: "Family",
      content: <UserRatingData />,
    },
    {
      label: "Group ",
      content: <UserRatingData />,
    },
    {
      label: "Solo",
      content: <UserRatingData />,
    },
    {
      label: "Business",
      content: <UserRatingData />,
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div
      className={`bg-white rounded-4 px-50 py-30 sm:px-20 sm:py-20 `}
      style={{
        boxShadow:"2px 2px 3px 0px #686f68",
        
      }}
    >
      <div className="col-12">
        <h3 className="text-22 fw-500">User Rating & Reviews</h3>
      </div>
      <Tabs
        className="tabs -underline-2 js-tabs"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="tabs__controls row x-gap-80 y-gap-10 lg:x-gap-20" style={{marginInline:"5em"}}>
          {tabs.map((tab, index) => (
            <Tab key={index} className="col-auto mt-3">
              <button className="tabs__button text-16 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
                {tab.label}
              </button>
            </Tab>
          ))}
        </TabList>
        <div className="container " >
          <div className="border-top-light"style={{marginInline:"5em"}} ></div>
        </div>

        <div className="tabs__content pt-30 js-tabs-content">
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

export default UserRating;
