import React from "react";
import Styles from "../../Styles/Destinations.module.css";
import Dubai from "../../Image/Destinations/Dubai.png";
import Africa from "../../Image/Destinations/Africa.png";
import Paris from "../../Image/Destinations/Paris.png";
import Qatar from "../../Image/Destinations/Qatar.png";
import Singapore from "../../Image/Destinations/Singapore.png";
import Switzerland from "../../Image/Destinations/Switzerland.png";

const Destinations = () => {
  return (
    <div id="destinations" className=" mb-12">
      <h1 className=" text-center text-neutral text-2xl lg:text-4xl font-bold my-10">
        Top Recommended Destinations
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-md lg:max-w-5xl gap-5">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`relative ${Styles.MainWrapper}`}
        >
          <label className={Styles.CardLabel} htmlFor="Dubai">
            Dubai
          </label>
          <img className=" w-full" src={Dubai} alt="Dubai" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`relative ${Styles.MainWrapper}`}
        >
          <label className={Styles.CardLabel} htmlFor="Africa">
            Africa
          </label>
          <img className=" w-full" src={Africa} alt="Africa" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`relative ${Styles.MainWrapper}`}
        >
          <label className={Styles.CardLabel} htmlFor="Switzerland">
            Switzerland
          </label>
          <img className=" w-full" src={Switzerland} alt="Switzerland" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`relative ${Styles.MainWrapper}`}
        >
          <label className={Styles.CardLabel} htmlFor="Qatar">
            Qatar
          </label>
          <img className=" w-full" src={Qatar} alt="Qatar" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`relative ${Styles.MainWrapper}`}
        >
          <label className={Styles.CardLabel} htmlFor="Paris">
            Paris
          </label>
          <img className=" w-full" src={Paris} alt="Paris" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`relative ${Styles.MainWrapper}`}
        >
          <label className={Styles.CardLabel} htmlFor="Singapore">
            Singapore
          </label>
          <img className=" w-full" src={Singapore} alt="Singapore" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
