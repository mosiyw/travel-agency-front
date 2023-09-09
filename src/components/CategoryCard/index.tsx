import React from "react";
import "./CategoryCard.styles.css";

interface CategoryCardProps {
  title: string;
  description: string;
}

export default function CategoryCard({
  title,
  description,
}: CategoryCardProps) {
  return (
    <div className="card-container">
      <div className="img-container">
        <p>img</p>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
    </div>
  );
}
