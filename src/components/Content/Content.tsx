import React from 'react'
import { Card, MessageBox, Tag } from 'element-react'
import styled from 'styled-components'

import { PokemonNameByIdType, PokemonNameIdType } from 'dux/pokemon/types'

import { capitalize } from 'lib/textParsers'

const Button = styled.button`
  align-items: flex-end;
  display: flex;
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

  const handleClick = (id: number) =>
    MessageBox.prompt('Add a memo if you wish:', 'Add to Favourites', {
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
    }).then(({ value }: any): void =>
      addFavourite({
        memo: value,
        pokemon: pokemon[id],
      })
    )

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  const renderHeader = (id: number): JSX.Element => (
    <Button
      className="el-button el-button--default"
      data-testid="button-add-favourite"
      disabled={favouritesIds.includes(id)}
      onClick={() => handleClick(id)}
      title="Add Pokemon to favourites"
      value={id}
    >
      <i className="el-icon-star-on"></i>
    </Button>
  )

  const renderPokemonArray = (): JSX.Element[] =>
    Object.values(pokemon).map(
      (pokemon: PokemonNameIdType): JSX.Element => (
        <Card
          className="box-card"
          header={renderHeader(pokemon.id)}
          key={pokemon.id}
        >
          <h3 data-testid="pokemon-card">{capitalize(pokemon.name)}</h3>
          <Tag type="gray">{`#${pokemon.id}`}</Tag>
        </Card>
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
