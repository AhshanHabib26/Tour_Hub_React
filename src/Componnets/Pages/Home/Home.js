import React from "react";
import Destinations from "../Destinations/Destinations";
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
    </div>
  );
};

export default Home;
