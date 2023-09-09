import React from "react";
import "./cooperations.styles.css";
import companyImage from "../../assets/images/companys/image 909.png";
import Grid from "@mui/material/Grid";
export default function Cooperations() {
  return (
    <>
      <div className="container">
        <Grid className="maingrid" container spacing={2}>
          <Grid className="logo" xs={2.4}>
            <img src={companyImage} alt="" />
          </Grid>
          <Grid className="logo" xs={2.4}>
            <img src={companyImage} alt="" />
          </Grid>
          <Grid className="logo" xs={2.4}>
            <img src={companyImage} alt="" />
          </Grid>
          <Grid className="logo" xs={2.4}>
            <img src={companyImage} alt="" />
          </Grid>
          <Grid className="logo" xs={2.4}>
            <img src={companyImage} alt="" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
