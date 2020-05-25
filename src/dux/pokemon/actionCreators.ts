import { PokemonReponseType } from './types'

export enum types {
  FETCH_POKEMON_ERROR = 'pokemon/FETCH_POKEMON_ERROR',
  FETCH_POKEMON_SUCCESS = 'pokemon/FETCH_POKEMON_SUCCESS',
  IS_FETCHING_POKEMON = 'pokemon/IS_FETCHING_POKEMON',
}

interface PayloadType {
  name: string
  pokemon: PokemonReponseType[]
}

interface FetchPokemonErrorType {
  error: string
  type: types.FETCH_POKEMON_ERROR
}

interface FetchPokemonSuccessType {
  payload: PayloadType
  type: types.FETCH_POKEMON_SUCCESS
}

interface IsFetchingPokemonType {
  type: types.IS_FETCHING_POKEMON
}

export type ActionType =
  | FetchPokemonErrorType
  | FetchPokemonSuccessType
  | IsFetchingPokemonType

const fetchPokemonError = (error: string): ActionType => ({
  type: types.FETCH_POKEMON_ERROR,
  error,
})

const fetchPokemonSuccess = (payload: PayloadType): ActionType => ({
  type: types.FETCH_POKEMON_SUCCESS,
  payload,
})

const isFetchingPokemon = (): ActionType => ({
  type: types.IS_FETCHING_POKEMON,
})

export { fetchPokemonError, fetchPokemonSuccess, isFetchingPokemon }
