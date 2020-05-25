import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { actions, selectors as favouritesSelectors } from 'dux/favourites'
import { FavouritesStateType } from 'dux/favourites/types'

import { selectors as pokemonSelectors } from 'dux/pokemon'
import { PokemonStateType } from 'dux/pokemon/types'

import Content, { DispatchPropsType, StatePropsType } from './Content'

interface StateType {
  favourites: FavouritesStateType
  pokemon: PokemonStateType
}

const mapStateToProps = (state: StateType): StatePropsType => ({
  favouritesIds: favouritesSelectors.getFavouritesIds(state),
  pokemon: pokemonSelectors.getPokemon(state),
  pokemonType: pokemonSelectors.getPokemonType(state),
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType =>
  bindActionCreators(
    {
      addFavourite: actions.addFavourite,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Content)
