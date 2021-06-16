import React from 'react'

import Deck from './deck'
import Hand from './hand'

const PlayingField = (props) => {



  // <TrashContainer />
  return (
    <aside style={{gridArea: "field", backgroundColor: "chartreuse", display: "grid", gridTemplateColumns: "1fr 8fr 1fr"}}>
      <Deck deck={props.currentDeck}/>
      <Hand hand={props.hand} selectCard={props.selectCard} chosenCard={props.chosenCard}/>
      <div>
        <button onClick={() => props.setTurn("endPlayerTurn")}>End Turn</button>
      </div>
    </aside>
  )
}

export default PlayingField
