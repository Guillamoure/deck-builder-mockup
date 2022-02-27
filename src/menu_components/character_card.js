import React from "react";
import { useSelector } from "react-redux";
import { toggleCharacterAction } from "../utils/action_creators/deck";

const CharacterCard = ({ character, showCards }) => {
  const selectedCharacters = useSelector((state) => state.deck.characters);

  const toggleCharacter = () => {
    let buttonName = "Recruit";
    if (selectedCharacters.includes(character.name)) {
      buttonName = "Remove";
    }
    return (
      <button onClick={() => toggleCharacterAction(character.name)}>
        {buttonName}
      </button>
    );
  };

  let style = {
    color: "black",
    backgroundColor: "#B19994",
  };

  if (selectedCharacters.includes(character.name)) {
    style.color = "#035E7B";
    style.backgroundColor = "#D6FFF6";
  }

  return (
    <div className="character-selection-card" style={style}>
      <strong onClick={() => showCards(character)}>{character.name}</strong>
      <br />
      <br />
      {toggleCharacter()}
    </div>
  );
};

export default CharacterCard;
