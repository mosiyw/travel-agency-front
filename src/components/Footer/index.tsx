import React from "react";
import "./footer.styles.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="mainContainer">
        <h1>Logo</h1>
        <div className="footer-column">
          <p className="footer-label">Company</p>
          <p className="footer-link">About us</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Blog</p>
          <p className="footer-link">Pricing</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Destinations</p>
          <p className="footer-link">Maldives</p>
          <p className="footer-link">Los Angeles</p>
          <p className="footer-link">Las Vegas</p>
          <p className="footer-link">Toronto</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Join Our Newsletter</p>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="copyright-text">
        © 2023 Your Company Name. All Rights Reserved.
      </div>
    </div>
  );
}
