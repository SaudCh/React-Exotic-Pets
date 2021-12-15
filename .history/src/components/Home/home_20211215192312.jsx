import React from "react";
import Ads from "./Ads";
import "./css/search.css";
import HomeSearch from "./HomeSearch";

function Home(props) {
  return (
    <div>
      <HomeSearch />
      <Ads addFavHandler={props.addFavHandler} />
    </div>
  );
}

export default Home;
