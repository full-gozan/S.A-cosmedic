import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const Profilo_prices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">Profilo prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.profilo} />
      </table>
    </div>
  );
};
export default Profilo_prices;
