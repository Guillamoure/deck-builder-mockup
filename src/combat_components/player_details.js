import React from "react";
import { useSelector } from "react-redux";
import hpBar from "../utils/hp_bar";

const PlayerDetails = (props) => {
  const { maxHP, characters, damage } = useSelector((state) => state.deck);
  const { shield } = props.partyStats;

  let currentHP = maxHP - damage;

  return (
    <div
      style={{ gridArea: "player", backgroundColor: "navy", color: "beige" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "13px",
        }}
      >
        {characters.map((c) => (
          <strong>{c}</strong>
        ))}
      </div>
      <div>
        {hpBar(currentHP, maxHP)}
        <span>
          {currentHP}/{maxHP} HP
        </span>
        <div>{shield} Shield</div>
      </div>
      <div>
        <p>
          <strong>Mana</strong> {props.mana}/3
        </p>
      </div>
    </div>
  );
};

export default PlayerDetails;
