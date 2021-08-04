import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const Fat_reducering_prices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">Fat Reducering prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.Fat_reducering} />
      </table>
    </div>
  );
};
export default Fat_reducering_prices;
