import React from "react";
import Banner from "./Banner";
import Members from "./Members";
import FilterContainer from "./FilterContainer";

const Main = () => {
  return (
  <div className="main-wrapper">
      <Banner />
      <div className="row cols-3">
        <div className="col">
          <div className="box">
            <Members/>
          </div>
        </div>
        <div className="col-6 filter-col">
          <div className="box">
            <FilterContainer/>
          </div>
        </div>
        <div className="col">
          <div className="box">3</div>
          </div>
      </div>
      {/*ANOTHER ROW STARTS */}
      <div className="row cols-3">
        <div className="col">
          <div className="box">
            <Members/>
          </div>
        </div>
        <div className="col-6 move">
          <div className="box">Move me</div>
        </div>
        <div className="col">
          <div className="box">3</div>
          </div>
          </div>
      </div>
  );
};

export default Main;
