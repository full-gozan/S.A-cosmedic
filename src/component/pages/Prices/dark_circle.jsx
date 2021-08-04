import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const Dark_circle_prices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">Dark Circle prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.Dark_Circle} />
      </table>
    </div>
  );
};
export default Dark_circle_prices;
