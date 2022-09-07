import React from "react";
import useData from "../../Hooks/useData";
import Styles from "../../Styles/UpcomingOffer.module.css";

const UpcomingOffer = () => {
  const [tours] = useData();
  const sliceTours = tours.slice(0, 3);

  return (
    <div id="upcoming-offer" className={Styles.UpCominBanner}>
      <h2 className=" text-center text-primary text-2xl lg:text-4xl font-bold my-10">
        {" "}
        Our Upcoming Best Tours
      </h2>
      <div className=" grid mb-10 px-5 lg:px-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-lg gap-5 lg:max-w-6xl">
        {sliceTours.map((tour) => (
          <>
            <div className=" relative">
              <div
                data-aos="zoom-in"
                class="card w-full bg-base-100 shadow relative"
              >
                <figure className=" relative">
                  <img
                    className=" relative w-full"
                    src={tour.Image}
                    alt="Shoes"
                  />
                  <h1 className={Styles.DayInner}>{tour.Day}</h1>
                </figure>

                <div class="card-body">
                  <h2 class="card-title">{tour.Title}</h2>
                  <div className=" flex items-center justify-between my-2">
                    <button className={Styles.BookBtn}>Book Now</button>
                    <h1 className=" text-lg font-semibold text-primary">
                      ${tour.Price}{" "}
                      <span className=" text-gray-500">/ Person</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UpcomingOffer;
