import React, { Component } from "react";
import "./style/treatments_intro.css";
import { Link } from "react-router-dom";

import { FaChessQueen } from "react-icons/fa";
class TreatmentsIntro extends Component {
  Service_Unit(props) {
    return (
      <div className="service-item">
        <Link to={props.treatment_url}>
          <div>
            <h4>{props.name}</h4>
            <FaChessQueen />
            <h6>More Info...</h6>
          </div>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="services_section">
        <div className="service-intro">
          <h1 className="section-name"> Our Services</h1>
          <p className="section-prag">
            All services are carried out by a medical practitioner trained in
            advanced etics. Our friendly team will provide a step-by-step guide
            and support you through the process.
          </p>
        </div>

        <div className="services">
          <this.Service_Unit name="Botox" treatment_url="treatment/botox" />
          <this.Service_Unit name="Filler" treatment_url="treatment/filler" />

          <this.Service_Unit name="Profilo" treatment_url="treatment/profilo" />

          <this.Service_Unit name="PRP" treatment_url="treatment/prp" />
          <this.Service_Unit
            name="Sunekos"
            treatment_url="treatment/sunekos"
          />
          <this.Service_Unit
            name="Fat Reducering"
            treatment_url="treatment/fat-reducering"
          />
          <this.Service_Unit
            name="Dark Circle"
            treatment_url="treatment/dark-circle"
          />
        </div>
      </div>
    );
  }
}
export default TreatmentsIntro;
