import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./character_card";
import Card from "./card_card";

import { changeLocationAction } from "../utils/action_creators/game_states";
import { setDeckAction } from "../utils/action_creators/deck";

const CharacterSelectContainer = () => {
  const [cards, setCards] = React.useState([]);
  const [card, setCard] = React.useState(null);

  let { characters } = useSelector((state) => state.characters);
  let currentRoster = useSelector((state) => state.deck.characters);

  const showCards = (character) => {
    setCards(character.cards);
  };

  const renderCharacterOptions = () => {
    let characterListItems = characters.map((c) => (
      <CharacterCard character={c} showCards={showCards} setCard={setCard} />
    ));

    return <div id="character-selection-container">{characterListItems}</div>;
  };

  const renderCards = () => {
    if (cards.length) {
      let cardItems = cards.map((card) => (
        <li onClick={() => setCard(card)}>{card}</li>
      ));

      return <ul>{cardItems}</ul>;
    }
  };

  const roster = () => {
    let deck = [];
    currentRoster.forEach((r) => {
      let characterCards = characters.find((char) => char.name === r).cards;
      deck = [...deck, ...characterCards];
    });
    deck = deck.sort((a, b) => a.localeCompare(b));
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {currentRoster.map((r) => (
            <li>{r}</li>
          ))}
        </ul>
        <h4>Deck</h4>
        <ol>
          {deck.map((card) => (
            <li>{card}</li>
          ))}
        </ol>
        {currentRoster.length >= 3 ? (
          <button onClick={() => startGame(deck)}>Start Game</button>
        ) : null}
      </div>
    );
  };

  const viewCard = () => {
    if (card) {
      return <Card name={card} />;
    }
  };

  const startGame = (deck) => {
    changeLocationAction("map");
    setDeckAction(deck);
  };

  return (
    <section style={{ display: "grid", gridTemplateColumns: "40% 30% 30%" }}>
      {renderCharacterOptions()}
      {roster()}
      {renderCards()}
      {viewCard()}
    </section>
  );
};

export default CharacterSelectContainer;
