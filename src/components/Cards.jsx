import React from "react";

const Cards = ({ title, children }) => {
  return (
    <div className="bg-dark text-light card">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Cards;
