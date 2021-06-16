const initialGameState = {
  location: "start",
  rooms: 0,
  currency: 0,
  treasure: 0,
  startTime: null
}

const reducer = (state = initialGameState, action) => {
  switch(action.type){
    case "CHANGE LOCATION":
      return {...state, location: action.location}
    default:
      return state
  }
}

export default reducer
