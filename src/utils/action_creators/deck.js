import Store from '../../store'

const { getState, dispatch } = Store

export const toggleCharacterAction = (character) => dispatch({type: "TOGGLE CHARACTER", character})
export const setDeckAction = (deck) => dispatch({type: "SET DECK", deck})
export const updateDamageAction = (damage) => dispatch({type: "UPDATE DAMAGE", damage})
