import React from "react";
import Banner from "./Banner";
import Members from "./Members";
import FilterContainer from "./FilterContainer";
import Post from "./Post";
import Groups from "./Groups";
import Quests from "./Quests";
import Badges from "./Badges";

const Main = () => {
  return (
  <div className="main-wrapper">
    <div className="main-page">
      <Banner />
      <div className="row cols-3">
        <div className="col col-md">
          <div className="box">
            <Members/>
          </div>
        </div>
        <div className="col-6 filter-col">
          <div className="box">
            <FilterContainer/>
          </div>
        </div>
        <div className="col col-md">
          <div className="box">
            <Groups/>
          </div>
          </div>
      </div>
      <div className="row cols-3">
        <div className="col col-md quests-wrapper">
          <div className="box">
            <Quests />
          </div>
        </div>
        <div className="col-6 post">
          <div className="box">
            <Post reply={true}/>
          </div>
        </div>
        <div className="col col-md badges">
          <div className="box">
            <Badges />
           </div>
        </div>
        </div>
        </div>
      <div className="row another-row">
          <div className="col-6 another-post">
            <Post reply={false} />
        </div>
      </div>
      </div>
  );
};

export default Main;
