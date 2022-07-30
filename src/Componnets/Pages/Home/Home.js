import React from "react";
import SubscribeModal from "../../Modal/SubscribeModal";
import Blog from "../Blog/Blog";
import Destinations from "../Destinations/Destinations";
import Guide from "../Guide/Guide";
import Review from "../Review/Review";
import Subscribe from "../Subscribe/Subscribe";
import Tours from "../Tours/Tours";
import UpcomingOffer from "../UpcomingOffer/UpcomingOffer";
import Banner from "./Banner";
import SearchInput from "./SearchInput";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchInput />
      <Tours />
      <Destinations />
      <UpcomingOffer/>
      <Guide/>
      <Review/>
      <Blog/>
      <Subscribe/>
      <SubscribeModal/>
    </div>
  );
};

export default Home;
