import React from "react";

const Location = ({ local }) => {
  return (
    <div className="relative">
      <img src={local.src} alt="" srcset="" />
      <div className="info flex justify-between">
        <sapn>{local.name}</sapn>
        <span>{local.price}</span>
      </div>
    </div>
  );
};

export default Location;
