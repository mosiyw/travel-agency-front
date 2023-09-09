import React from "react";
import "./Offerbanner.styles.css";
import line from "../../assets/images/offerbanner/line.svg";

export default function Offerbanner() {
  return (
    <div className="offer-banner">
      <div className="text-box">
        <p className="title">Let’s make your next holiday amazing</p>
      </div>
      <img className="line" src={line} alt="line" />
    </div>
  );
}
