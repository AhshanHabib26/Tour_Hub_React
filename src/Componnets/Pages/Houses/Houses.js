import React from "react";
import { Link } from "react-router-dom";
import useData from "../../Hools/useData";
import House from "./House";

const Houses = () => {
 
  const [houses] = useData()
  const sliceHouses = houses.slice(0, 6)

  return (
    <div>
      <h2 className="  text-center text-neutral text-2xl lg:text-4xl font-bold my-8">
        {" "}
       Our Best Selling Tours
      </h2>
      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-lg gap-10 lg:max-w-7xl">
        {sliceHouses.map((house) => (
          <House house={house} key={house.Id} />
        ))}
      </div>
      <div className=" my-8 text-center">
        <Link to='/' className="btn text-white btn-md btn-primary">Explore More</Link>
      </div>
    </div>
  );
};

export default Houses;
