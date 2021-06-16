import React from 'react'
import EnemyCard from './enemy_card'

const EnemyContainer = (props) => {

  const [hover, toggleHover] = React.useState(false)

  let style = {gridArea: "enemies", backgroundColor: "maroon", color: "white", display: "flex", justifyContent: "space-between", boxSizing: "border-box", width: "auto"}

  if (props.chosenCard.key && !props.chosenCard.target && hover){
    style.border = "2px dashed white"
  }

  return (
    <div style={style} onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)} onClick={() => props.cardPlayed(null)}>
      {props.enemies.map((e, i) => <EnemyCard enemy={e} index={i} chosenCard={props.chosenCard} cardPlayed={props.cardPlayed} />)}
    </div>
  )
}

export default EnemyContainer
