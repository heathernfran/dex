import axios from 'axios'
import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionCreators from './actionCreators'
import { PokemonTypesStateType } from './types'

type ActionReturnType = ThunkAction<
  void,
  PokemonTypesStateType,
  unknown,
  Action<string>
>

const fetchPokemonTypes = (): ActionReturnType => async (
  dispatch: Dispatch
) => {
  dispatch(actionCreators.isFetchingPokemonTypes())

  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/type`)

    return dispatch(actionCreators.fetchPokemonTypesSuccess(data.results))
  } catch (error) {
    return dispatch(actionCreators.fetchPokemonTypesError(error.message))
  }
}

export { fetchPokemonTypes }
