import React from "react";
import Styles from "../../Styles/Tour.module.css";

const Tour = ({ tour }) => {
  const { Day, Image, Price, Title } = tour;
  return (
    <div className=" relative">
      <div data-aos="zoom-in" class="card w-full bg-base-100 shadow relative">
        <figure className=" relative">
          <img className=" relative w-full" src={Image} alt="Shoes" />
          <h1 className={Styles.DayInner}>{Day}</h1>
        </figure>

        <div class="card-body">
          <h2 class="card-title">{Title}</h2>
          <div className=" flex items-center justify-between my-2">
            <button className={Styles.BookBtn}>Book Now</button>
            <h1 className=" text-lg font-semibold text-primary">
              ${Price} <span className=" text-gray-500">/ Person</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
