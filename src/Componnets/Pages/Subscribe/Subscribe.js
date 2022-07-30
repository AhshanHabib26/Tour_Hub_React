import React from "react";
import Styles from "../../Styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={Styles.SubscribeContainer}>
      <div className=" py-20 lg:py-28 flex flex-col lg:flex-row  lg:justify-evenly items-center flex-ro">
        <h1 className=" text-3xl lg:text-5xl font-extrabold capitalize  text-secondary">
          Join Us for Our <span className=" text-info">Update</span> 
        </h1>
        <button className=" btn mt-5 lg:mt-0 btn-secondary">Subcribe Us</button>
      </div>
    </div>
  );
};

export default Subscribe;
