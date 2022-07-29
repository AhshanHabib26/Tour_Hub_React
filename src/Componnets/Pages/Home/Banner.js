import React from "react";
import "swiper/css";
import BannerImg from "../../Image/BannerImg.png";
import BannerImgOne from "../../Image/BannerImg_1.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.refresh();

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img alt="Banner" src={BannerImg} class="w-full" />

          <div className=" text-white absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <h1
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="2500"
                data-aos-anchor-placement="top-center"
                className=" text-center text-xl  lg:text-4xl font-bold"
              >
                Welcome To <span className=" text-primary">TourHub</span>{" "}
              </h1>
              <h1
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="3000"
                data-aos-mirror="true"
                data-aos-easing="ease-in-sine"
                data-aos-anchor-placement="top-center"
                className=" text-3xl lg:text-7xl font-extrabold text-center"
              >
                Enjoy Your New <br></br> Advanture{" "}
              </h1>
            </div>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img alt="Banner" src={BannerImgOne} class="w-full" />
          <div className=" text-white absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <h1
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="2500"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-center"
                className=" text-center text-xl  lg:text-4xl font-bold"
              >
                Welcome To <span className=" text-primary">TourHub</span>{" "}
              </h1>
              <h1
                data-aos="fade-up-right"
                data-aos-offset="200"
                data-aos-duration="3000"
                data-aos-mirror="true"
                data-aos-easing="ease-in-sine"
                data-aos-anchor-placement="top-center"
                className=" text-3xl lg:text-7xl font-extrabold text-center"
              >
                Journey To Explore <br></br> World{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full my-2">
        <a href="#slide1" class="btn btn-circle btn-xs">
          ❮
        </a>
        <a href="#slide2" class="btn  btn-circle mx-2 btn-xs">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;
