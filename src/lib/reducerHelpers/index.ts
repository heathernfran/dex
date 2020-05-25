import { PokemonNameByIdType, PokemonReponseType } from 'dux/pokemon/types'
import { PokemonObjectType } from 'dux/pokemonTypes/types'

import { parseIdFromUrl } from 'lib/textParsers'

const buildArrayOfIds = (state: { [key: number]: any }): number[] =>
  Object.keys(state).map((key: string): number => parseInt(key))

const buildObjectById = (state: PokemonReponseType[]): PokemonNameByIdType =>
  state.reduce(
    (
      acc: PokemonNameByIdType,
      { pokemon }: { pokemon: PokemonObjectType }
    ): PokemonNameByIdType => {
      const id: number = parseIdFromUrl(pokemon.url)
      acc[id] = { ...pokemon, id }
      return acc
    },
    {}
  )

const removeIdFromArray = (array: number[], id: number): number[] =>
  array.filter((key) => key !== id)

export { buildArrayOfIds, buildObjectById, removeIdFromArray }
