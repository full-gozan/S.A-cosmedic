import React from "react";
import PriceItem from "./PriceItem";
import "./Prices.css";
import Prices_table from "./prices_table_data";

const Sunekos_prices = () => {
  return (
    <div className="price-container">
      <h3 class="table-title">Sunekos prices</h3>
      <table className="price-table">
        <PriceItem table={Prices_table.Sunekos} />
      </table>
    </div>
  );
};
export default Sunekos_prices;
