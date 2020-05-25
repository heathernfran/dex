import { ActionType, types } from './actionCreators'
import { PokemonTypesStateType } from './types'

const initialState: PokemonTypesStateType = {
  error: '',
  isFetching: false,
  types: [],
}

const state = (
  state = initialState,
  action: ActionType
): PokemonTypesStateType => {
  switch (action.type) {
    case types.FETCH_POKEMON_TYPES_ERROR: {
      const { error } = action
      return {
        ...state,
        error,
        isFetching: false,
      }
    }

    case types.FETCH_POKEMON_TYPES_SUCCESS: {
      const { payload } = action

      return {
        ...state,
        isFetching: false,
        types: payload,
      }
    }

    case types.IS_FETCHING_POKEMON_TYPES: {
      return {
        ...state,
        isFetching: true,
      }
    }

    default: {
      return state
    }
  }
}

export default state
