import React from "react";
import "swiper/css";
import BannerImg from "../../Image/BannerImg.png";
import BannerImgOne from "../../Image/BannerImg_1.png";
import Styles from '../../Styles/Banner.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const Banner = () => {
  return (
    <div className=" relative">
      <div className="carousel w-full text-center relative">
        <div id="slide1" className="carousel-item relative w-full">
          <img alt="Banner" src={BannerImg} className="w-full" />

          <div className=" text-white absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <h1
                data-aos="fade-up"
                data-aos-duration="2500"
                className=" text-center text-xl  lg:text-4xl font-bold"
              >
                Welcome To <span className=" text-primary">TourHub</span>{" "}
              </h1>
              <h1
                data-aos="fade-right"
                data-aos-duration="3000"
                className=" text-3xl lg:text-7xl font-extrabold text-center"
              >
                Enjoy Your New <br></br> Advanture{" "}
              </h1>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full text-center">
          <img alt="Banner" src={BannerImgOne} className="w-full" />
          <div className=" text-white absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <h1
                data-aos="fade-down"
                data-aos-duration="2500"
                className=" text-center text-xl  lg:text-4xl font-bold"
              >
                Welcome To <span className=" text-primary">TourHub</span>{" "}
              </h1>
              <h1
                data-aos="fade-up-right"
                data-aos-duration="3000"
                className=" text-3xl lg:text-7xl font-extrabold text-center"
              >
                Journey To Explore <br></br> World{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.bannerBtn}>
        <a href="#slide1" className="btn btn-circle btn-xs">
          ❮
        </a>
        <a href="#slide2" className="btn  btn-circle mx-2 btn-xs">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;
