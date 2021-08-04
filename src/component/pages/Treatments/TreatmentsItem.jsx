import React from "react";
import "./Treatments.css";

const TreatmentsItem = (props) => {
  return (
    <div className="treatment">
      <div className="treatment-info">
        <h3>{props.title}</h3>
        <p>{props.info}</p>
      </div>

      <div className="treatment-price">{props.priceTable}</div>
    </div>
  );
};
export default TreatmentsItem;
