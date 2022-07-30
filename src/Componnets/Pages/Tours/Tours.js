import React from "react";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import Tour from "./Tour";

const Tours = () => {
 
  const [tours] = useData()
  const sliceTours = tours.slice(0, 6)

  return (
    <div>
      <h2 className="  text-center text-neutral text-2xl lg:text-4xl font-bold my-8">
        {" "}
       Our Best Selling Tours
      </h2>
      <div className=" grid px-5 lg:px-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-lg gap-10 lg:max-w-7xl">
        {sliceTours.map((tour) => (
          <Tour tour={tour} key={tour.Id} />
        ))}
      </div>
      <div className=" my-8 text-center">
        <Link to='/' className="btn text-white btn-md btn-primary">Explore More</Link>
      </div>
    </div>
  );
};

export default Tours;
