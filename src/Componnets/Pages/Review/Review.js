import React from "react";
import Styles from "../../Styles/Review.module.css";
import UserOne from "../../Image/user-1.png";
import UserTwo from "../../Image/user-2.png";
import QuoteImg from "../../Image/Quote.png";

const Review = () => {
  return (
    <div className={` pt-10 ${Styles.ReviewContainer}`}>
      <h1 className=" text-center text-white text-2xl lg:text-4xl font-bold pb-10">
        Travelers Review
      </h1>
      <div className=" pb-24 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl px-6 lg:px-0">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={Styles.CardContainer}
        >
          <div className=" flex justify-center items-center flex-col ">
            <img className="w-[50px] opacity-60" src={QuoteImg} alt="" />
            <h1>
              Impressed by the work done to get us on board at a very late date.
              The trip itself was the usual wonderful Scenic Cruise. The two
              tour guides, Olivia and William were outstanding and all the
              personnel on The made the trip wonderful.
            </h1>
            <div className={Styles.userImg}>
              <img className=" w-[60px] " src={UserOne} alt="" />
            </div>
          </div>
        </div>
        <div
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={Styles.CardContainerTwo}
        >
          <div className=" flex justify-center items-center flex-col ">
            <img className="w-[50px] opacity-60 " src={QuoteImg} alt="" />
            <h1>
              Impressed by the work done to get us on board at a very late date.
              The trip itself was the usual wonderful Scenic Cruise. The two
              tour guides, Olivia and William were outstanding and all the
              personnel on The made the trip wonderful.
            </h1>
            <div className={Styles.userImg}>
              <img className=" w-[60px] " src={UserTwo} alt="" />
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={Styles.CardContainer}
        >
          <div className=" flex justify-center items-center flex-col ">
            <img className="w-[50px] opacity-60" src={QuoteImg} alt="" />
            <h1>
              Impressed by the work done to get us on board at a very late date.
              The trip itself was the usual wonderful Scenic Cruise. The two
              tour guides, Olivia and William were outstanding and all the
              personnel on The made the trip wonderful.
            </h1>
            <div className={Styles.userImg}>
              <img className=" w-[50px] " src={UserOne} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
