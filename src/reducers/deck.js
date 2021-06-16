const initialDeck = {
  deck: [],
  characters: [],
  damage: 10,
  maxHP: 80
}

const reducer = (state = initialDeck, action) => {
  switch(action.type){
    case "TOGGLE CHARACTER":
      var charactersDupe = [...state.characters]
      if (charactersDupe.includes(action.character)){
        charactersDupe = charactersDupe.filter(c => c != action.character)
      } else {
        charactersDupe.push(action.character)
      }
      return {...state, characters: charactersDupe}
    case "SET DECK":
      return {...state, deck: action.deck}
    case "UPDATE DAMAGE":
      return{...state, damage: action.damage}
    default:
      return state
  }
}

export default reducer
