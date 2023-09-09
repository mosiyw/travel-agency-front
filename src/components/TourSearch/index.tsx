import React from "react";
import "./TourSearch.styles.css";

export default function TourSearch() {
  return (
    <div className="TourSearch">
      <p className="searchItem">Where to?</p>
      <div className="spacer"></div>
      <p className="searchItem">Travel Type</p>
      <div className="spacer"></div>
      <p className="searchItem">Douration</p>
      <button className="Searchbtn">Search</button>
    </div>
  );
}
