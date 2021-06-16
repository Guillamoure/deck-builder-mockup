import React from 'react'

const Deck = (props) => {

  // console.log(props.deck)

  return (
    <p style={{padding: "12%", border: "1px solid black", borderRadius: "10px", margin: "auto"}}>
      {props.deck.length}
    </p>
  )
}

export default Deck
