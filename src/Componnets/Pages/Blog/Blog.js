import React from "react";
import BlogOne from "../../Image/Blog/Blog_1.png";
import BlogTwo from "../../Image/Blog/Blog_2.png";
import BlogThree from "../../Image/Blog/Blog_3.png";
import Styles from '../../Styles/Blog.module.css'

const Blog = () => {
  return (
    <div id="blogs">
      <h1 className=" text-center text-primary text-2xl lg:text-4xl font-bold my-10">
        Top Recent Blog Post
      </h1>
      <div className=" grid mb-10 px-5 lg:px-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-lg gap-5 lg:max-w-6xl">
        <div className=" relative">
          <div
            data-aos="zoom-in"
            className="card w-full bg-base-100 shadow relative"
          >
            <figure className=" relative">
              <img className=" relative w-full" src={BlogOne} alt="Blog" />
              <h1 className={Styles.PostAdmin}>Ahshan Habib</h1>
            </figure>

            <div className="card-body">
              <h2 className="card-title">Taj Mahal and Wildlife with Royal Stay at Castles</h2>
              <div className=" flex items-end justify-end my-2">
                <h1 className=" cursor-pointer text-lg font-semibold text-primary">Read More</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div
            data-aos="zoom-in"
            className="card w-full bg-base-100 shadow relative"
          >
            <figure className=" relative">
              <img className=" relative w-full" src={BlogTwo} alt="Blog" />
              <h1 className={Styles.PostAdmin}>Ahshan Habib</h1>
            </figure>

            <div className="card-body">
              <h2 className="card-title">High-speed train to Venice and Free day in Venice</h2>
              <div className=" flex items-end justify-end my-2">
                <h1 className=" cursor-pointer text-lg font-semibold text-primary">Read More</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div
            data-aos="zoom-in"
            className="card w-full bg-base-100 shadow relative"
          >
            <figure className=" relative">
              <img className=" relative w-full" src={BlogThree} alt="Blog" />
              <h1 className={Styles.PostAdmin}>Habib Gazi</h1>
            </figure>

            <div className="card-body">
              <h2 className="card-title">Best Journey of Spain & Portugal - 9 Days</h2>
              <div className=" flex items-end justify-end my-2">
                <h1 className=" cursor-pointer text-lg font-semibold text-primary">Read More</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
