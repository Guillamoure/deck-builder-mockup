import './App.scss';
import { useSelector } from 'react-redux'
import MenuContainer from './menu_components/menu_container'
import CharacterSelectContainer from './menu_components/character_select_container'
import MapContainer from './map_components/map_container'
import CombatContainer from './combat_components/combat_container'

const App = () => {

  let { location } = useSelector(state => state.gameState)

  const renderLocation = () => {
    switch(location){
      case "start":
        return <MenuContainer />
      case "characterSelect":
        return <CharacterSelectContainer />
      case "map":
        return <MapContainer />
      case "fight":
        return <CombatContainer />
      default:
        return <h2>Error. Please reload the game. Component {location} is not rendering.</h2>
    }
  }

  return (
    renderLocation()
  )
}

export default App;
