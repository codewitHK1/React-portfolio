import React from "react";
import Common from "./common";
import bg from "./images/png-2.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Campany with "
        imgsrc={bg}
        visit="/service"
        btname="Explore More"
      />
    </>
  );
};

export default Home;
