import { PokemonObjectType } from './types'

export enum types {
  FETCH_POKEMON_TYPES_ERROR = 'pokemonTypes/FETCH_POKEMON_TYPES_ERROR',
  FETCH_POKEMON_TYPES_SUCCESS = 'pokemonTypes/FETCH_POKEMON_TYPES_SUCCESS',
  IS_FETCHING_POKEMON_TYPES = 'pokemonTypes/IS_FETCHING_POKEMON_TYPES',
}

interface FetchPokemonTypesErrorType {
  error: string
  type: types.FETCH_POKEMON_TYPES_ERROR
}

interface FetchPokemonTypesSuccessType {
  payload: PokemonObjectType[]
  type: types.FETCH_POKEMON_TYPES_SUCCESS
}

interface IsFetchingPokemonType {
  type: types.IS_FETCHING_POKEMON_TYPES
}

export type ActionType =
  | FetchPokemonTypesErrorType
  | FetchPokemonTypesSuccessType
  | IsFetchingPokemonType

const fetchPokemonTypesError = (error: string): ActionType => ({
  type: types.FETCH_POKEMON_TYPES_ERROR,
  error,
})

const fetchPokemonTypesSuccess = (
  payload: PokemonObjectType[]
): ActionType => ({
  type: types.FETCH_POKEMON_TYPES_SUCCESS,
  payload,
})

const isFetchingPokemonTypes = (): ActionType => ({
  type: types.IS_FETCHING_POKEMON_TYPES,
})

export {
  fetchPokemonTypesError,
  fetchPokemonTypesSuccess,
  isFetchingPokemonTypes,
}
