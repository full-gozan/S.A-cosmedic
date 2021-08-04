import React from "react";
import "./style/Introduction.css";
import { BiPhoneCall } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const HomePageIntroduction = () => {
  return (
    <section>
      <div className="intro">
        <div className="intro-brief">
          <h4 className="intro-shine">Welcome to S.A. cosmedical clinic</h4>
          <p>
            Bli behandlad i Malmö av estetisk sjuksköterska i toppklass som har
            utfört tusentals behandlingar och hjälpt sina patienter nå sitt
            estetiska mål. Hos oss blir du en del av en exklusiv klubb där
            människan kommer först.
          </p>
        </div>
        <div className="contact">
          <div className="inner-header header-book-time">
            <h6>
              <FaCalendarCheck />
            </h6>

            <a href="#">Book Time</a>
          </div>
          <div className="inner-header header-tel">
            <h6>
              <BiPhoneCall />
            </h6>
            <a href="tel:+46709703102">Ring </a>
          </div>
          <div className="inner-header header-map">
            <h6>
              <FiMapPin />
            </h6>
            <h6>
              <a href="https://www.google.com/maps/place/Bokgatan+26,+214+34+Malm%C3%B6/@55.5878022,13.0154606,17z/data=!4m13!1m7!3m6!1s0x4653a16846bb52b5:0xfdc8c127cca7e241!2sBokgatan+26,+214+34+Malm%C3%B6!3b1!8m2!3d55.5878022!4d13.0176493!3m4!1s0x4653a16846bb52b5:0xfdc8c127cca7e241!8m2!3d55.5878022!4d13.0176493" >Find Us </a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageIntroduction;
