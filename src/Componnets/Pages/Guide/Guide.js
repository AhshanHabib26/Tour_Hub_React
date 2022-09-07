import React from "react";
import Styles from "../../Styles/Guide.module.css";
import GuideOne from "../../Image/Guide/Guide (1).png";
import GuideTwo from "../../Image/Guide/Guide (2).png";
import GuideThree from "../../Image/Guide/Guide (3).png";

const Guide = () => {
  return (
    <div className=" my-16">
      <h1 className=" text-center text-neutral text-2xl lg:text-4xl font-bold my-10">
        Our Top Guide
      </h1>
      <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-md lg:max-w-5xl gap-5">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="card w-full bg-base-100 shadow-2xl"
        >
          <figure className="px-10 pt-10">
            <img
              src={GuideOne}
              alt="Shoes"
              className={`rounded-xl ${Styles.GuideImg}`}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-2xl font-extrabold text-neutral">Olivia Smith</h2>
            <p>Tour Guide</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="card w-full bg-base-100 shadow-2xl"
        >
          <figure className="px-10 pt-10">
            <img
              src={GuideTwo}
              alt="Shoes"
              className={`rounded-xl ${Styles.GuideImg}`}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-2xl font-extrabold text-neutral">Benjamin M</h2>
            <p>Tour Guide</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="card w-full bg-base-100 shadow-2xl"
        >
          <figure className="px-10 pt-10">
            <img
              src={GuideThree}
              alt="Shoes"
              className={`rounded-xl ${Styles.GuideImg}`}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-2xl font-extrabold text-neutral">William S</h2>
            <p>Tour Guide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
