import React, { useContext } from "react";

// Importing Global context
import { GlobalContext } from "../context/context";

export function MainBanner() {
  const { Cases } = useContext(GlobalContext);

  return (
    <div className="MainBanner container">
      <div className="mainbanner-info">
        <h5>Confirmed Cases</h5>
        <h5 className="value-2">Active <span>Cases</span></h5>
        <h5 className="value-3">Deaths</h5>
      </div>
      {/*-----------mapped here to get the value dynamically------------ */}
      {Cases.map((val) => {
        return (
          <div className="mainbanner-inner" key={val.uid}>
            <div className="column-1">
              <h4>{val.provinceState}</h4>
            </div>
            <div className="column-2">
              <h6 className="long">{val.confirmed}</h6>
            </div>
            <div className="column-2 change">
              <h6>{val.active}</h6>
            </div>
            <div className="column-2 change2">
              <h6>{val.deaths}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
