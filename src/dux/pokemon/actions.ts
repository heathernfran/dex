import axios from 'axios'
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionCreators from './actionCreators'
import { PokemonStateType } from './types'

type ActionReturnType = ThunkAction<
  void,
  PokemonStateType,
  unknown,
  Action<string>
>

const fetchPokemon = (id: number): ActionReturnType => async (
  dispatch: Dispatch
) => {
  dispatch(actionCreators.isFetchingPokemon())

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/type/${id}`
    )

    return dispatch(actionCreators.fetchPokemonSuccess(data))
  } catch (error) {
    return dispatch(actionCreators.fetchPokemonError(error.message))
  }
}

export { fetchPokemon }
