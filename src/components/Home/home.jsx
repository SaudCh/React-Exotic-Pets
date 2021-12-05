import React from "react";
import Ads from "./Ads";
import "./css/search.css";
import HomeSearch from "./HomeSearch";

function Home() {
  return (
    <div>
      <HomeSearch />
      <Ads />
    </div>
  );
}

export default Home;
