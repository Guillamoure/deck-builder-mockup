import Store from '../../store'

const { getState, dispatch } = Store

export const changeLocationAction = (location) => dispatch({type: "CHANGE LOCATION", location})
