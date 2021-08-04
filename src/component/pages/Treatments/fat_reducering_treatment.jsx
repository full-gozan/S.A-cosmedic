import React from "react";
import TreatmentsItem from "./TreatmentsItem";
import Fat_reducering_prices from "../../pages/Prices/fat_reducering";
import "./Treatments.css";

const Fat_reducering_treatment = () => {
  return (
    <TreatmentsItem
      title="Fat Reducering"
      info="A skin glow treatment is the latest trend in skin care technology.
  This method of skin care is a popular treatment in Singapore and Korea, 
  producing amazing results, and is just now making its way across the ocean 
  to Toronto and beyond. The BB Glow treatment is an intensive skin treatment
  that uses state-of-the-art laser technology to penetrate the deepest layers of the skin.
  This laser penetration stimulates natural collagen production as well as
    offering a myriad of other benefits.

Collagen is a natural protein found throughout the body, and it helps to give structure,
 elasticity and vibrancy to your skin. Unfortunately, as you age, your body produces less
  collagen, which in turn leads to wrinkles, and a loss of skin elasticity and firmness."
      priceTable={<Fat_reducering_prices />}
    />
  );
};
export default Fat_reducering_treatment;
