import React, { useState, useContext, useEffect } from "react";

// Importing Global context
import { GlobalContext } from "../context/context";

export function MainBanner() {
  const { Cases } = useContext(GlobalContext);

  return (
    <div className="MainBanner container">
      
      {Cases.map((val) => {
        return (
          <div className="mainbanner-inner" key={val.uid}>
            <div className="column-1">
              <h4>{val.provinceState}</h4>
            </div>
            <div className="column-2">
              <h6 className="long"><span>Confirmed</span>{val.confirmed}</h6>
            </div>
            <div className="column-2 change">
              <h6><span>Active</span>{val.active}</h6>
            </div>
            <div className="column-2 change2">
              <h6><span>Deaths</span>{val.deaths}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
