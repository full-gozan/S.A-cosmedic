import React from "react";
import "./style/Home.css";
import TreatmentsIntro from "./HomePage2";
import HomePageIntroduction from "./HomePage1";
import AboutUs from "../../pages/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <HomePageIntroduction />
      <TreatmentsIntro />
      <AboutUs />
    </div>
  );
};

export default Home;
