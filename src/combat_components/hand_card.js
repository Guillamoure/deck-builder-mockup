import React from 'react'

const HandCard = props => {

  const { name, cost, desc, key } = props.card
  let style = {}

  if (props.chosenCard.key === key){
    style={border: "2px dashed white"}
  }

  return (
    <div className="hand-card" style={style} onClick={() => props.selectCard(props.card)}>
      <p>{name}</p>
      <p>{desc}</p>
      <p>{cost}</p>
    </div>
  )
}

export default HandCard
