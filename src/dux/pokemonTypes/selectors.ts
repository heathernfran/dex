import { PokemonObjectType, PokemonTypesStateType } from './types'

interface SelectorsType {
  pokemonTypes: PokemonTypesStateType
}

const getPokemonTypes = (state: SelectorsType): PokemonObjectType[] =>
  state.pokemonTypes.types

export { getPokemonTypes }
