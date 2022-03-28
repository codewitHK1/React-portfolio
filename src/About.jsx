import React from "react";
import Common from "./common";
import bg from "./images/about.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={bg}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
