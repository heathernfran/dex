import { buildObjectById, buildArrayOfIds } from 'lib/reducerHelpers'

import { ActionType, types } from './actionCreators'
import { PokemonStateType } from './types'

const initialState: PokemonStateType = {
  allIds: [],
  byId: {},
  error: '',
  isFetching: false,
  type: '',
}

const state = (state = initialState, action: ActionType): PokemonStateType => {
  switch (action.type) {
    case types.FETCH_POKEMON_ERROR: {
      const { error } = action

      return {
        ...state,
        error,
        isFetching: false,
      }
    }

    case types.FETCH_POKEMON_SUCCESS: {
      const { payload } = action

      const byId = buildObjectById(payload.pokemon)
      const allIds = buildArrayOfIds(byId)

      return {
        ...state,
        allIds,
        byId,
        isFetching: false,
        type: payload.name,
      }
    }

    case types.IS_FETCHING_POKEMON: {
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
