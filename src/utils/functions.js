import { changeLocationAction } from './action_creators/game_states'
import { updateDamageAction } from './action_creators/deck'
import store from '../store'

 export const renderRoom = () => {
   let rng = Math.ceil(Math.random() * 100)
   let room
   console.log(rng)
   if (rng > 85){
     room = "randomEvent"
   } else if (rng > 0){
     room = "fight"
   }

   changeLocationAction(room)
 }

 export const formattingEnemyAttacks = (action) => {
   // console.log(action)
   return `${action.title} ${action.value}`
 }

 export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const activateCardEffect = (card, stats, target, difficulty) => {
  // console.log("Card", card)
  // console.log("Stats", stats)
  // console.log("Target", target)
  let obj = {party: {}, enemy: {}, player: {}}
  if (card.target){
    if (card.damage){
      obj.enemy.damage = card.baseValue
    }
  } else {
    if (card.shield){
      obj.party.shield = card.baseValue
    }
    if (card.heal){
      obj.party.heal = card.baseValue
    }
  }
  console.log(obj)
  return obj
}

export const updateParty = (cardResult, currentState) => {

  let { damage } = {...store.getState().deck}

  if (cardResult.shield){
    currentState.shield += cardResult.shield
  }

  if (cardResult.heal){
    damage = cardResult.heal >= damage ? 0 : damage - cardResult.heal

    updateDamageAction(damage)
  }

  if (cardResult.damage){
    let remainingDamage = cardResult.damage
    if (currentState.shield){
      console.log("The number of shield is", currentState.shield, "and the number of damage is", remainingDamage)
      if (remainingDamage >= currentState.shield){
        // if damage is higher or equal than shield
        remainingDamage = remainingDamage - currentState.shield
        currentState.shield = 0
      } else {
        // if shield is higher than damage
        currentState.shield = currentState.shield - remainingDamage
        remainingDamage = 0
      }
    }

    damage += remainingDamage

    updateDamageAction(damage)
  }

  return currentState
}

export const updateEnemies = (cardResult, currentStateArray, target) => {
  currentStateArray[target].damage += cardResult.damage

  return currentStateArray
}

export const resolveEnemyAction = (enemyAction) => {
  let obj = {party: {}, enemy: {}, player: {}}
  if (enemyAction.title === "Attack"){
    obj.party.damage = enemyAction.value
  }
  if (enemyAction.title === "Strengthen"){
    obj.enemy.strength = enemyAction.value
  }

  return obj

}
