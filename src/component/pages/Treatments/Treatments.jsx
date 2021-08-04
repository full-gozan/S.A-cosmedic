import React from "react";
import Botox_treatment from "./botox_treatment";
import Filler_treatment from "./filler_treatment";
import Dark_circle_treatment from "./dark_circle_treatment";
import Fat_reducering_treatment from "./fat_reducering_treatment";
import Profilo_treatment from "./profilo_treatment";
import Sunekos_treatment from "./sunekos_treatment";
import PRP_treatment from "./PRP_treatment";
import "./Treatments.css";
import beauty from "../../images/beauty.jpg";

const Treatments = () => (
  <div className="treatment-container">
    <div className="treatment-panel">
      <div className="panel-img">
        <div>
          <img
            src={beauty}
            style={{ width: "100%", height: "300px" }}
            alt="not fount"
          />
          <div className="panel-welcome">
            <h3>Welcome To Our Treatments </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="treatments">
      <Botox_treatment />
      <Filler_treatment />
      <Dark_circle_treatment />
      <Fat_reducering_treatment />
      <Profilo_treatment />
      <Sunekos_treatment />
      <PRP_treatment />
    </div>
  </div>
);
export default Treatments;

 