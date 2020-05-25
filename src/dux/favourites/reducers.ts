import { ActionType, types } from './actionCreators'
import { FavouritesByIdType, FavouritesStateType } from './types'
import { buildArrayOfIds, removeIdFromArray } from 'lib/reducerHelpers'

const initialState: FavouritesStateType = {
  allIds: [],
  byId: {},
}

const state = (
  state = initialState,
  action: ActionType
): FavouritesStateType => {
  switch (action.type) {
    case types.ADD_FAVOURITE: {
      const { payload } = action

      const byId = {
        ...state.byId,
        [payload.pokemon.id]: {
          ...payload.pokemon,
          memo: payload.memo,
        },
      }

      const allIds = buildArrayOfIds(byId)

      return {
        ...state,
        allIds,
        byId,
      }
    }

    case types.REMOVE_FAVOURITE: {
      const { payload: payloadId } = action

      const filteredAllIds = removeIdFromArray(state.allIds, payloadId)

      const filteredFavourites = Object.assign({}, state, {
        byId: Object.keys(state.byId).reduce(
          (acc: FavouritesByIdType, id: string) => {
            const currentId = parseInt(id)
            if (currentId !== payloadId) {
              acc[currentId] = state.byId[currentId]
            }
            return acc
          },
          {}
        ),
      })

      return {
        ...state,
        ...filteredFavourites,
        allIds: filteredAllIds,
      }
    }

    default: {
      return state
    }
  }
}

export default state
