import React from 'react'
import HandCard from './hand_card.js'

const Hand = (props) => {

  return (
    <article style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
      {props.hand.map(card => <HandCard card={card} selectCard={props.selectCard} chosenCard={props.chosenCard} />)}
    </article>
  )
}

export default Hand
