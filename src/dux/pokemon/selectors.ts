import { PokemonNameByIdType, PokemonStateType } from './types'

interface SelectorsType {
  pokemon: PokemonStateType
}

const getPokemon = (state: SelectorsType): PokemonNameByIdType =>
  state.pokemon.byId

const getPokemonType = (state: SelectorsType): string => state.pokemon.type

export { getPokemon, getPokemonType }
