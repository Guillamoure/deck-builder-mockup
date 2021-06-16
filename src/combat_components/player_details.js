import React from 'react'
import { useSelector } from 'react-redux'

const PlayerDetails = (props) => {

  const { maxHP, characters, damage } = useSelector(state => state.deck)
  const { shield } = props.partyStats

  return (
    <div style={{gridArea: "player", backgroundColor: "navy", color: "beige"}}>
      <div style={{display: "flex", justifyContent: "space-between", fontSize: "13px"}}>
        {characters.map(c => <strong>{c}</strong>)}
      </div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <span>{maxHP - damage}/{maxHP} HP</span>
        <span>{shield} Shield</span>
      </div>
      <div>
        <p><strong>Mana</strong> {props.mana}/3</p>
      </div>
    </div>
  )
}

export default PlayerDetails
