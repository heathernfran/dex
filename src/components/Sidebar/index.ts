import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { actions as pokemonActions } from 'dux/pokemon'

import { actions as pokemonTypesActions, selectors } from 'dux/pokemonTypes'
import { PokemonTypesStateType } from 'dux/pokemonTypes/types'

import Sidebar, { DispatchPropsType, StatePropsType } from './Sidebar'

interface StateType {
  pokemonTypes: PokemonTypesStateType
}

const mapStateToProps = (state: StateType): StatePropsType => ({
  pokemonTypes: selectors.getPokemonTypes(state),
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType =>
  bindActionCreators(
    {
      fetchPokemon: pokemonActions.fetchPokemon,
      fetchPokemonTypes: pokemonTypesActions.fetchPokemonTypes,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
