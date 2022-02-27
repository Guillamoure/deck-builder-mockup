import React from "react";

const HandCard = (props) => {
  const { name, cost, desc, key, tags } = props.card;
  let style = {};

  if (props.chosenCard.key === key) {
    style = { border: "2px dashed white" };
  }

  return (
    <div
      className="hand-card"
      style={style}
      onClick={() => props.selectCard(props.card)}
    >
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

export default HandCard;
