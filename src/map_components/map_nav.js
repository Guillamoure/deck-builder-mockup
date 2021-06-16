import React from 'react'
import { useSelector } from 'react-redux'

const MapNav = () => {

  const { currency, treasure, startTime, rooms } = useSelector(state => state.gameState)

  return (
    <nav style={{display: "flex", justifyContent: "space-around"}}>
      <h4><strong>Rooms Completed</strong>: {rooms}</h4>
      <h4><strong>Silver</strong>: {currency}</h4>
      <h4><strong>Treasure</strong>: {treasure}</h4>
    </nav>
  )
}

export default MapNav
