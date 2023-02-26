import React from "react";
import Location from "./Location";

import img1 from "../img/city-title-Dhaka.png"

const locations = [
  {
    id: 1,
    name: "Dhaka to Rajshahi",
    price: "780",
    src: img1
  },
  {
    id: 2,
    name: " Chittagong to Dhaka",
    price: "780",
    src: img1
  },
  {
    id: 3,
    name: " Sylhet to Khulna",
    price: "780",
    src: img1
  },
  {
    id: 4,
    name: " Cox's Bazar to Sylhet",
    price: "780",
    src: img1
  },
]

const PopularPlace = () => {
  
  return (
    <div className="adventure flex flex-col gap-3">
      <h4>Plan your next adventure</h4>
      <p>Search the most popular deals on trains on bdtrains</p>
      <div className="location grid grid-cols-4 gap-10">
      {
        locations.map((local) => (
          <Location key={local.id} local={local}/>
        ))
      }
      </div>
    </div>
  );
};

export default PopularPlace;