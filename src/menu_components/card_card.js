import React from "react";
import cards from "../data/cards";

const Card = ({ name }) => {
  let { desc, cost, tags } = cards.find((c) => c.name === name);

  return (
    <div className="hand-card">
      <header className="hand-card-top">
        <div className="hand-card-name">{name}</div>
      </header>
      <div className="hand-card-cost">{cost}</div>
      <div className="hand-card-image"></div>
      <div className="hand-card-tags">{tags}</div>
      <div className="hand-card-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
