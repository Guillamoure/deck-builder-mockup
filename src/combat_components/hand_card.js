import React from "react";

const HandCard = (props) => {
  const { name, cost, desc, key, tags, src } = props.card;
  let style = {};

  if (props.chosenCard.key === key) {
    style = { border: "2px dashed white" };
  }

  let costStyle = {};
  console.log(name, cost, props.mana);
  if (cost > props.mana) {
    costStyle.backgroundColor = "#024150";
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
      <div className="hand-card-cost" style={costStyle}>
        {cost}
      </div>
      <div className="hand-card-image">
        <img
          src={"cards/" + src}
          alt={name}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div className="hand-card-tags">{tags}</div>
      <div className="hand-card-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default HandCard;
