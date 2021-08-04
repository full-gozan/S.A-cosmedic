import React, { useState, useEffect } from "react";
import "./About_us.css";
const AboutUs = () => {
  return (
    <div className="about-me-frame">
      <h3 className="brand_name">Who we Are ?</h3>
      <div className="about_me_container">
        <div className="about_brand">
          <div className="about_me_brief">
            <h3 className="sa">About the Clinic </h3>
            <p>
              Glow was one of the first hairdressers in Copenhagen, which was
              certified green hairdresser through the Copenhagen Environmental
              Network. We still only work with approved hairdressing products
              for yours, the environment and our own. We are called Glow because
              we do everything to make you radiantly happy when you leave.
              Please call if you have any questions. We look forward to becoming
              your new hairdresser.
            </p>
          </div>
        </div>
        <div className="about_me">
          <div className="about_me_brief">
            <h3 className="owner">Shahad Albazy</h3>
            <p>
              Project's owner with 20 years of experience from Gun Brits, Zenz
              and Aqua. I do my utmost to find the right treatment for you. My
              success criterion is that you shine when you leave and maybe even
              book time for the next treatment right away. I always get praise
              for my dense and natural streaks, and I emphasize that your time
              in the salon is your time so you feel like you have my full
              attention.
            </p>
          </div>
        </div>
      </div>
      <div className="opening_time">
        <h3>Opening hours</h3>
        <h5>Monday 9.30am-6.00pm</h5>
        <h5>Tuesday 9.30am-6.00pm</h5>
        <h5>Wednesday 9.15am-5.45pm</h5>
        <h5>Thursday 9.15am-5.00pm</h5>
        <h5>Friday 9.30am-6.00pm</h5>
        <h5>Saturday 9.30am-4.00pm</h5>
        <h5>Sunday ............</h5>
      </div>
    </div>
  );
};
export default AboutUs;
