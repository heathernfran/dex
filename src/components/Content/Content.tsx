import React from 'react'
import styled from 'styled-components'

import { PokemonNameByIdType, PokemonNameIdType } from 'dux/pokemon/types'

import { capitalize } from 'lib/textParsers'

const Button = styled.button`
  align-items: flex-end;
  cursor: ${({ disabled }: HTMLButtonElement) => disabled && 'not-allowed'};
  display: flex;
  opacity: ${({ disabled }: HTMLButtonElement) => disabled && '50%'};
`

export interface DispatchPropsType {
  addFavourite: Function
}

export interface StatePropsType {
  favouritesIds: number[]
  pokemon: PokemonNameByIdType
  pokemonType: string
}

type OwnPropsType = DispatchPropsType & StatePropsType

const Content = ({
  addFavourite,
  favouritesIds,
  pokemon,
  pokemonType,
}: OwnPropsType): JSX.Element => {
  //
  // ─── EVENT LISTENERS ────────────────────────────────────────────────────────────
  //

  const handleClick = (id: number): void => {
    addFavourite({
      memo: '',
      pokemon: pokemon[id],
    })
  }
  // MessageBox.prompt('Add a memo if you wish:', 'Add to Favourites', {
  //   confirmButtonText: 'Add',
  //   cancelButtonText: 'Cancel',
  // }).then(({ value }: any): void =>
  //   addFavourite({
  //     memo: value,
  //     pokemon: pokemon[id],
  //   })
  // )

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  const renderPokemonArray = (): JSX.Element[] =>
    Object.values(pokemon).map(
      (pokemon: PokemonNameIdType): JSX.Element => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={pokemon.id}
        >
          <Button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            data-testid="button-add-favourite"
            disabled={favouritesIds.includes(pokemon.id)}
            onClick={() => handleClick(pokemon.id)}
            title="Add Pokemon to favourites"
            value={pokemon.id}
          >
            Add favourite
          </Button>

          <h3 data-testid="pokemon-card">{capitalize(pokemon.name)}</h3>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{`#${pokemon.id}`}</span>
        </div>
      )
    )

  return (
    <>
      <h2 data-testid="heading-pokemon-type">{capitalize(pokemonType)}</h2>
      {renderPokemonArray()}
    </>
  )
}

export default Content
