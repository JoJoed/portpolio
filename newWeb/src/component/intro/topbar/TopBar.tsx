import React from "react";
import LeftTIme from "@src/component/intro/topbar/LeftTIme";

const TopBar = () => {
  return (
    <div className="base_color topbar_container">
      <div className="left_topbar">
        <LeftTIme />
      </div>
      <div className="right_topbar">
        <img
          src={"/assets/img/navbar/nav_group.svg"}
          width={90}
          alt="load_error"
        />
      </div>
    </div>
  );
};

export default TopBar;
