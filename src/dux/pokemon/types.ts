import { PokemonObjectType } from 'dux/pokemonTypes/types'

export interface PokemonNameByIdType {
  [id: number]: PokemonNameIdType
}

export interface PokemonNameIdType {
  id: number
  name: string
  url: string
}

export interface PokemonReponseType {
  pokemon: PokemonObjectType
}

export interface PokemonStateType {
  allIds: number[]
  byId: PokemonNameByIdType
  error: string | null
  isFetching: boolean
  type: string
}
