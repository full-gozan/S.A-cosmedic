import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const BotoxPrices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">Botox Prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.Botox} />
      </table>
    </div>
  );
};
export default BotoxPrices;
