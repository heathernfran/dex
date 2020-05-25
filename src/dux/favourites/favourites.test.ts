import configureStore from 'redux-mock-store'

import reducer, { actionCreators, selectors, types } from './index'
import { FavouritesStateType } from './types'
import { ActionType } from './actionCreators'

const mockStore = configureStore([])

const mockInitialState: FavouritesStateType = {
  allIds: [],
  byId: {},
}

const mockAllIds = [1]

const mockMemo = 'Test memo'

const mockPokemon = { id: 1, name: 'Test 1', url: 'example.com/1/' }

const mockFavourite = {
  [mockPokemon.id]: {
    ...mockPokemon,
    memo: mockMemo,
  },
}

const mockPayload = { memo: mockMemo, pokemon: mockPokemon }

//
// ─── ACTION CREATORS ────────────────────────────────────────────────────────────
//

describe('Favourites actions', () => {
  it('creates an action for addFavourite()', () => {
    const expectedAction = { type: types.ADD_FAVOURITE, payload: mockPayload }

    expect(actionCreators.addFavourite(mockPayload)).toEqual(expectedAction)
  })

  it('creates an action for deleteFavourite()', () => {
    const expectedAction = { type: types.REMOVE_FAVOURITE, payload: 1 }

    expect(actionCreators.removeFavourite(1)).toEqual(expectedAction)
  })
})

//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

describe('Favourites thunks', () => {
  it('dispatches addFavourite()', () => {
    const store = mockStore({})

    store.dispatch(actionCreators.addFavourite(mockPayload))

    const action = store.getActions()
    const expectedPayload = {
      type: types.ADD_FAVOURITE,
      payload: mockPayload,
    }

    expect(action).toEqual([expectedPayload])
  })

  it('dispatches removeFavourite()', () => {
    const store = mockStore({})

    store.dispatch(actionCreators.removeFavourite(1))

    const action = store.getActions()
    const expectedPayload = {
      type: types.REMOVE_FAVOURITE,
      payload: 1,
    }

    expect(action).toEqual([expectedPayload])
  })
})

//
// ─── REDUCERS ───────────────────────────────────────────────────────────────────
//

describe('Favourites reducer', () => {
  it('returns the state from ADD_FAVOURITE', () => {
    const action: ActionType = {
      type: types.ADD_FAVOURITE,
      payload: mockPayload,
    }

    const result = { [mockPokemon.id]: { ...mockPokemon, memo: mockMemo } }

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      allIds: mockAllIds,
      byId: result,
    })
  })

  it('returns the state from REMOVE_FAVOURITE', () => {
    const action: ActionType = {
      type: types.REMOVE_FAVOURITE,
      payload: 1,
    }

    const mockPreviousState = {
      ...mockInitialState,
      allIds: mockAllIds,
      byId: { [mockPokemon.id]: { ...mockPokemon, memo: mockMemo } },
    }

    expect(reducer(mockPreviousState, action)).toEqual(mockInitialState)
  })
})

//
// ─── SELECTORS ──────────────────────────────────────────────────────────────────
//

describe('Favourites selectors', () => {
  it('returns the favourites keyed object from getFavourites()', () => {
    const mockState = {
      favourites: {
        ...mockInitialState,
        byId: mockFavourite,
      },
    }

    expect(selectors.getFavourites(mockState)).toEqual(mockFavourite)
  })

  it('returns an array of favourites IDs from getFavouritesIds()', () => {
    const mockState = {
      favourites: {
        ...mockInitialState,
        allIds: mockAllIds,
      },
    }

    expect(selectors.getFavouritesIds(mockState)).toContain(1)
  })
})
