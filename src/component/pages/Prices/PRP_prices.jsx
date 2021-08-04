import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const PRP_prices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">PRP Prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.PRP} />
      </table>
    </div>
  );
};
export default PRP_prices;
