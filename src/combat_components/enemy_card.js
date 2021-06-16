import React from 'react'
import actionStyles from '../data/action_styles'
import { formattingEnemyAttacks } from '../utils/functions'

const EnemyCard = (props) => {

  const [hover, toggleHover] = React.useState(false)

  const { name, hp, damage, shields, attackIndex, actionStyle } = props.enemy
  // console.log(props.enemy)
  let style = {}

  if (props.chosenCard.key && props.chosenCard.target && hover){
    style.border = "2px dashed white"
  }

  return (
    <div className="enemy-card" style={style} onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)} onClick={() => props.cardPlayed(props.index)}>
      <strong>{name}</strong>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <span>{hp - damage}/{hp} HP</span>
        <span>{shields} Shields</span>
      </div>
      <br/>
      <div>
        {formattingEnemyAttacks(actionStyles(actionStyle)[attackIndex])}
      </div>

    </div>
  )

}

export default EnemyCard
