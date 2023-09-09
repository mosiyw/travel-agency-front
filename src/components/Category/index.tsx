import React from "react";
import "./Category.styles.css";
import CategoryCard from "../CategoryCard";
export default function Category() {
  return (
    <div className="main-container">
      <p className="title-label">CATEGORY</p>
      <p className="description">We Offer Best Services</p>
      <div className="cards">
        <CategoryCard
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing"
        />
        <CategoryCard
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing"
        />
        <CategoryCard
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing"
        />
        <CategoryCard
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing"
        />
      </div>
    </div>
  );
}
