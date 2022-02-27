import React from "react";
import PlayerDetails from "./player_details";
import EnemyContainer from "./enemy_container";
import PlayingField from "./playing_field";
import enemyData from "../data/enemies";
import actionStyles from "../data/action_styles";

import { useSelector } from "react-redux";
import {
  shuffleArray,
  activateCardEffect,
  updateParty,
  updateEnemies,
  resolveEnemyAction,
} from "../utils/functions";
import cards from "../data/cards";

const CombatContainer = () => {
  const [partyStats, setPartyStats] = React.useState({
    shield: 0,
    strength: 0,
    defense: 0,
  });
  const [turn, setTurn] = React.useState("player");
  const [mana, setMana] = React.useState(3);
  const [enemies, setEnemies] = React.useState([]);
  const [difficulty, setDifficulty] = React.useState(1);
  const [chosenCard, setChosenCard] = React.useState({ key: null });

  React.useEffect(() => {
    let selectDifficulty = enemyData.filter((ed) => ed.difficulty === 1);
    let index = Math.floor(Math.random() * selectDifficulty.length);
    let foundEnemies = selectDifficulty[index];
    foundEnemies = foundEnemies.enemies.map((e) => {
      let rng = Math.random() * 10;
      let attackIndex = 0;
      if (rng > 6) {
        attackIndex = Math.floor(
          Math.random() * actionStyles(e.actionStyle).length
        );
      }
      return {
        ...e,
        strength: 0,
        defense: 0,
        damage: 0,
        shields: 0,
        attackIndex,
      };
    });
    setEnemies(foundEnemies);
    setDifficulty(selectDifficulty[index].difficulty);
  }, []);

  React.useEffect(async () => {
    if (turn === "endPlayerTurn") {
      setDiscardPile([...discardPile, ...hand]);
      setHand([]);
      setTurn("enemyTurn");
    } else if (turn === "enemyTurn") {
      let enemiesDupe = [...enemies];
      for (let i = 0; i < enemiesDupe.length; i++) {
        let enemy = enemiesDupe[i];
        // grab enemy effect
        let actions = actionStyles(
          enemy.actionStyle,
          difficulty,
          enemy.modifier
        );
        let enemyAction = actions[enemy.attackIndex];
        // calculate what they do
        let result = resolveEnemyAction(enemyAction);
        // update party
        if (Object.keys(result.party).length) {
          let updatedState = updateParty(result.party, { ...partyStats });
          // >>> BUG <<<
          // if the party has a shield, it doesn't get updated until after all the attacks go through
          setPartyStats(updatedState);
        }
        // update enemy
        let newAttackIndex =
          enemy.attackIndex + 1 === actions.length ? 0 : enemy.attackIndex + 1;
        enemy.attackIndex = newAttackIndex;

        await new Promise((r) => setTimeout(r, 500));
        console.log(enemyAction.title);
      }
      // update enemies

      setEnemies(enemiesDupe);

      // start playerTurn
      setTurn("startPlayerTurn");
    } else if (turn === "startPlayerTurn") {
      let newHand = [];
      let playerDeck = [...currentDeck];
      let discardDupe = [...discardPile];
      for (let i = 0; i < 5; i++) {
        // check if deck has cards
        if (!playerDeck.length) {
          // shuffle
          let shuffledDeck = shuffleArray(discardDupe);
          // add cards from discard to deck
          playerDeck = shuffledDeck;
          discardDupe = [];
        }
        // draw a card
        newHand.push(playerDeck.shift());
      }
      // reset
      // clear discard pile if it was shuffled to make the new deck
      if (!discardDupe.length) {
        setDiscardPile(discardDupe);
      }
      // set deck without drawn cards
      setCurrentDeck(playerDeck);
      // set hand
      setHand(newHand);
      // reset mana
      setMana(3);
      // reset shields
      setPartyStats({ ...partyStats, shield: 0 });
      setTurn("player");
    }
  }, [turn]);

  // win condition
  // and or removing enemies from combat
  React.useEffect(() => {}, [enemies]);

  //deck, hand, discard

  const { deck } = useSelector((state) => state.deck);

  const [hand, setHand] = React.useState([]);
  const [currentDeck, setCurrentDeck] = React.useState([]);
  const [discardPile, setDiscardPile] = React.useState([]);
  const [key, setKey] = React.useState(1);

  React.useEffect(() => {
    let keyDupe = 1;
    let playerDeck = deck.map((card) => {
      let cardData = cards.find((c) => c.name === card);
      return {
        ...cardData,
        key: keyDupe++,
      };
    });
    playerDeck = shuffleArray([...playerDeck]);

    let newHand = [];
    for (let i = 0; i < 5; i++) {
      newHand.push(playerDeck.shift());
    }

    setHand(newHand);
    setCurrentDeck(playerDeck);
    setKey(keyDupe);
  }, []);

  // ^^^

  const selectCard = (card) => {
    if (chosenCard.key === card.key) {
      setChosenCard({ key: null });
    } else {
      setChosenCard(card);
    }
  };

  const cardPlayed = (target) => {
    // false clicks
    if (!chosenCard.key) {
      return null;
    }
    if (chosenCard.target && target === null) {
      return null;
    }
    if (!chosenCard.target && target != null) {
      return null;
    }

    //card shouldn't be played if you don't have enough mana
    if (chosenCard.cost > mana) {
      return null;
    }
    setMana(mana - chosenCard.cost);

    //remove card from hand
    let handDupe = [...hand];
    handDupe = handDupe.filter((c) => c.key != chosenCard.key);
    setHand(handDupe);

    //activate effect of card
    let result = activateCardEffect(chosenCard, partyStats, target, difficulty);
    // check result.party && result.enemy && (eventually) result.player
    if (Object.keys(result.party).length) {
      let updatedState = updateParty(result.party, { ...partyStats });
      setPartyStats(updatedState);
    }
    if (Object.keys(result.enemy).length) {
      let updatedState = updateEnemies(result.enemy, [...enemies], target);
      setEnemies(updatedState);
    }

    // send card to discard
    let discardDupe = [...discardPile];
    discardDupe.push(chosenCard);
    setDiscardPile(discardDupe);

    // reset
    setChosenCard({ key: null });
  };

  return (
    <section className="combat-container">
      <PlayerDetails partyStats={partyStats} mana={mana} />
      <EnemyContainer
        enemies={enemies}
        chosenCard={chosenCard}
        cardPlayed={cardPlayed}
      />
      <PlayingField
        selectCard={selectCard}
        chosenCard={chosenCard}
        hand={hand}
        currentDeck={currentDeck}
        discardPile={discardPile}
        setTurn={setTurn}
      />
    </section>
  );
};

export default CombatContainer;
