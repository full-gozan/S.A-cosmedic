import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const Filler_prices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">Filler prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.Filler} />
      </table>
    </div>
  );
};
export default Filler_prices;
