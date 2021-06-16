import React from 'react'
import { useSelector } from 'react-redux'
import { toggleCharacterAction } from '../utils/action_creators/deck'

const CharacterCard = ({character, showCards}) => {

  const selectedCharacters = useSelector(state => state.deck.characters)

  const toggleCharacter = () => {
    let buttonName = "Recruit"
    if (selectedCharacters.includes(character.name)){
      buttonName = "Remove"
    }
    return <button onClick={() => toggleCharacterAction(character.name)}>{buttonName}</button>
  }

  return (
    <li>
      <strong onClick={() => showCards(character)}>{character.name}</strong> - {toggleCharacter()}
    </li>
  )
}

export default CharacterCard
