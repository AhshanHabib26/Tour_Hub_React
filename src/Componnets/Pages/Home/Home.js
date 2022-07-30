import React from "react";
import Destinations from "../Destinations/Destinations";
import Guide from "../Guide/Guide";
import Review from "../Review/Review";
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
    </div>
  );
};

export default Home;
