import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imageOne from "../../Image/Gallery/Gallery_1.png";
import imageTwo from "../../Image/Gallery/Gallery_2.png";
import imageThree from "../../Image/Gallery/Gallery_3.png";
import imageFour from "../../Image/Gallery/Gallery_4.png";
import imageFive from "../../Image/Gallery/Gallery_5.png";
import imageSix from "../../Image/Gallery/Gallery_6.png";
import imageSeven from "../../Image/Gallery/Gallery_7.png";
import imageEight from "../../Image/Gallery/Gallery_8.png";

const Gallery = () => {
  return (
    <div className=" mb-10">
      <h1 className=" text-center text-primary text-2xl lg:text-4xl font-bold my-10">
        Our Gallery
      </h1>
      <div className=" mx-auto max-w-4xl px-6 lg:px-0 md:px-0  ">
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={false}> 
          <div>
            <img alt="Gallery" src={imageOne}/>
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img alt="Gallery" src={imageThree}/>
          </div>
          <div>
            <img alt="Gallery" src={imageFour}/>
          </div>
          <div>
            <img alt="Gallery" src={imageTwo}/>
          </div>
          <div>
            <img alt="Gallery" src={imageFive}/>
          </div>
          <div>
            <img alt="Gallery" src={imageSix}/>
          </div>
          <div>
            <img alt="Gallery" src={imageSeven}/>
          </div>
          <div>
            <img alt="Gallery" src={imageEight}/>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
