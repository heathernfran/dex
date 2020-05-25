export interface PokemonObjectType {
  name: string
  url: string
}

export interface PokemonObjectResponseType {
  pokemon: PokemonObjectType
}

export interface PokemonTypesStateType {
  error: string
  isFetching: boolean
  types: PokemonObjectType[]
}
