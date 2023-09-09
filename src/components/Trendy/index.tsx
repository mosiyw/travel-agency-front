import React from "react";
import "./trendy.styles.css";
import TrendyCard from "../TrendyCard";

export default function Trendy() {
  return (
    <div className="mani-container">
      <p className="title-label">Trendy</p>
      <p className="description"> Our Trending Tour Packages</p>
      <div className="Card-box">
        <TrendyCard />
        <TrendyCard />
        <TrendyCard />
      </div>
    </div>
  );
}
