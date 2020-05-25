import { combineReducers } from 'redux'

import favourites from './favourites'
import pokemon from './pokemon'
import pokemonTypes from './pokemonTypes'

export default combineReducers({
  favourites,
  pokemon,
  pokemonTypes,
})
