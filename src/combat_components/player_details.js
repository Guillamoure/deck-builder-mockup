import React from "react";
import { useSelector } from "react-redux";
import hpBar from "../utils/hp_bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldBlank, faMoon } from "@fortawesome/free-solid-svg-icons";

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
        <div>
          <FontAwesomeIcon icon={faShieldBlank} size="2x" /> {shield}
        </div>
      </div>
      <div>
        <p style={{ color: "#048ba8" }}>
          <FontAwesomeIcon icon={faMoon} size="2x" /> {props.mana}/3
        </p>
      </div>
    </div>
  );
};

export default PlayerDetails;
