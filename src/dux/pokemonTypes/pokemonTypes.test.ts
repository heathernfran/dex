import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import reducer, { actionCreators, actions, selectors, types } from './index'
import { ActionType } from './actionCreators'
import { PokemonTypesStateType } from './types'

const mockStore = configureStore([thunk])

const mockInitialState: PokemonTypesStateType = {
  error: '',
  isFetching: false,
  types: [],
}

const mockPayload = [
  { name: 'Test 1', url: 'example.com/1/' },
  { name: 'Test 2', url: 'example.com/2/' },
]

const mockPokemonTypes = [
  { name: 'Test 1', url: 'example.com/1/' },
  { name: 'Test 2', url: 'example.com/2/' },
]

//
// ─── ACTION CREATORS ────────────────────────────────────────────────────────────
//

describe('Pokemon Types actions', () => {
  it('creates an action for isFetchingPokemonTypes()', () => {
    const expectedAction = { type: types.IS_FETCHING_POKEMON_TYPES }

    expect(actionCreators.isFetchingPokemonTypes()).toEqual(expectedAction)
  })

  it('creates an action for fetchPokemonTypesSuccess()', () => {
    const expectedAction = {
      type: types.FETCH_POKEMON_TYPES_SUCCESS,
      payload: mockPayload,
    }

    expect(actionCreators.fetchPokemonTypesSuccess(mockPayload)).toEqual(
      expectedAction
    )
  })

  it('creates an action for fetchPokemonTypesError()', () => {
    const expectedAction = {
      type: types.FETCH_POKEMON_TYPES_ERROR,
      error: 'error',
    }

    expect(actionCreators.fetchPokemonTypesError('error')).toEqual(
      expectedAction
    )
  })
})

//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

describe('Pokemon Types thunks', () => {
  it('dispatches isFetchingPokemonTypes()', () => {
    const store = mockStore({})

    store.dispatch(actionCreators.isFetchingPokemonTypes())

    const action = store.getActions()
    const expectedPayload = { type: types.IS_FETCHING_POKEMON_TYPES }

    expect(action).toEqual([expectedPayload])
  })

  it('dispatches fetchPokemonTypesSuccess()', () => {
    const store = mockStore({})

    store.dispatch(actionCreators.fetchPokemonTypesSuccess(mockPayload))

    const action = store.getActions()
    const expectedPayload = {
      type: types.FETCH_POKEMON_TYPES_SUCCESS,
      payload: mockPayload,
    }

    expect(action).toEqual([expectedPayload])
  })

  it('dispatches fetchPokemonTypesError()', () => {
    const store = mockStore({})

    const error = 'Error'

    store.dispatch(actionCreators.fetchPokemonTypesError(error))

    const action = store.getActions()
    const expectedPayload = { type: types.FETCH_POKEMON_TYPES_ERROR, error }

    expect(action).toEqual([expectedPayload])
  })
})

//
// ─── REDUCERS ───────────────────────────────────────────────────────────────────
//

describe('Pokemon Types reducer', () => {
  it('returns the state from IS_FETCHING_POKEMON_TYPES', () => {
    const action: ActionType = { type: types.IS_FETCHING_POKEMON_TYPES }

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      isFetching: true,
    })
  })

  it('returns the state from FETCH_POKEMON_TYPES_SUCCESS', () => {
    const action: ActionType = {
      type: types.FETCH_POKEMON_TYPES_SUCCESS,
      payload: mockPayload,
    }

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      types: mockPayload,
    })
  })

  it('returns the state from FETCH_POKEMON_TYPES_ERROR', () => {
    const action: ActionType = {
      type: types.FETCH_POKEMON_TYPES_ERROR,
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

describe('Pokemon Types selectors', () => {
  it('returns types from getPokemonTypes()', () => {
    const mockState = {
      pokemonTypes: {
        ...mockInitialState,
        types: mockPokemonTypes,
      },
    }

    expect(selectors.getPokemonTypes(mockState)).toEqual(mockPokemonTypes)
  })
})
