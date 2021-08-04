import React from "react";
import BotoxPrices from "./botox_pricecs";
import PRP_prices from "./PRP_prices";
import Dark_circle_prices from "./dark_circle";
import Sunekos_prices from "./sunekos";
import Fat_reducering_prices from "./fat_reducering";
import Profilo_prices from "./profilo";
import Filler_prices from "./filler_prices";
import "./Prices.css";

const Prices = () => {
  return (
    <div className="price-frame">
      <BotoxPrices />
      <Filler_prices />
      <Profilo_prices />
      <PRP_prices />
      <Sunekos_prices />
      <Fat_reducering_prices />
      <Dark_circle_prices />
    </div>
  );
};

export default Prices;
