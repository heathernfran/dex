import configureStore from 'redux-mock-store'

import reducer, { actionCreators, selectors, types } from './index'
import { ActionType } from './actionCreators'
import { PokemonStateType } from './types'

const mockStore = configureStore([])

const mockInitialState: PokemonStateType = {
  allIds: [],
  byId: {},
  error: '',
  isFetching: false,
  type: '',
}

const mockAllIds = [1, 2]

const mockType = 'Test Type'

const mockPayload = {
  name: mockType,
  pokemon: [
    { pokemon: { name: 'Test 1', url: 'example.com/1/' } },
    { pokemon: { name: 'Test 2', url: 'example.com/2/' } },
  ],
}

const mockPokemon = {
  1: {
    id: 1,
    name: 'Test 1',
    url: 'example.com/1/',
  },
  2: {
    id: 2,
    name: 'Test 2',
    url: 'example.com/2/',
  },
}

//
// ─── ACTION CREATORS ────────────────────────────────────────────────────────────
//

describe('Pokemon actions', () => {
  it('creates an action for isFetchingPokemon()', () => {
    const expectedAction = { type: types.IS_FETCHING_POKEMON }

    expect(actionCreators.isFetchingPokemon()).toEqual(expectedAction)
  })

  it('creates an action for fetchPokemonSuccess()', () => {
    const expectedAction = {
      type: types.FETCH_POKEMON_SUCCESS,
      payload: mockPayload,
    }

    expect(actionCreators.fetchPokemonSuccess(mockPayload)).toEqual(
      expectedAction
    )
  })

  it('creates an action for fetchPokemonError()', () => {
    const expectedAction = {
      type: types.FETCH_POKEMON_ERROR,
      error: 'error',
    }

    expect(actionCreators.fetchPokemonError('error')).toEqual(expectedAction)
  })
})

//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

describe('Pokemon thunks', () => {
  it('dispatches isFetchingPokemon()', () => {
    const store = mockStore({})

    store.dispatch(actionCreators.isFetchingPokemon())

    const action = store.getActions()
    const expectedPayload = { type: types.IS_FETCHING_POKEMON }

    expect(action).toEqual([expectedPayload])
  })

  it('dispatches fetchPokemonSuccess()', () => {
    const store = mockStore({})

    store.dispatch(actionCreators.fetchPokemonSuccess(mockPayload))

    const action = store.getActions()
    const expectedPayload = {
      type: types.FETCH_POKEMON_SUCCESS,
      payload: mockPayload,
    }

    expect(action).toEqual([expectedPayload])
  })

  it('dispatches fetchPokemonError()', () => {
    const store = mockStore({})

    const error = 'Error'

    store.dispatch(actionCreators.fetchPokemonError(error))

    const action = store.getActions()
    const expectedPayload = { type: types.FETCH_POKEMON_ERROR, error }

    expect(action).toEqual([expectedPayload])
  })
})

//
// ─── REDUCERS ───────────────────────────────────────────────────────────────────
//

describe('Pokemon reducer', () => {
  it('returns the state from IS_FETCHING_POKEMON', () => {
    const action: ActionType = { type: types.IS_FETCHING_POKEMON }

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      isFetching: true,
    })
  })

  it('returns the state from FETCH_POKEMON_SUCCESS', () => {
    const action: ActionType = {
      type: types.FETCH_POKEMON_SUCCESS,
      payload: mockPayload,
    }

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      allIds: mockAllIds,
      byId: mockPokemon,
      type: mockType,
    })
  })

  it('returns the state from FETCH_POKEMON_ERROR', () => {
    const action: ActionType = {
      type: types.FETCH_POKEMON_ERROR,
      error: 'Error',
    }

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      error: 'Error',
    })
  })
})

//
// ─── SELECTORS ──────────────────────────────────────────────────────────────────
//

describe('Pokemon selectors', () => {
  it('returns the pokemon keyed object from getPokemon()', () => {
    const mockState = {
      pokemon: {
        ...mockInitialState,
        byId: mockPokemon,
      },
    }

    expect(selectors.getPokemon(mockState)).toEqual(mockPokemon)
  })

  it('returns the pokemon type from getPokemonType()', () => {
    const mockState = {
      pokemon: {
        ...mockInitialState,
        type: mockType,
      },
    }

    expect(selectors.getPokemonType(mockState)).toEqual(mockType)
  })
})
