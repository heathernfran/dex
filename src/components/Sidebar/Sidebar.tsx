import React from 'react'
import styled from 'styled-components'

import { PokemonObjectType } from 'dux/pokemonTypes/types'

import { capitalize, filterText, parseIdFromUrl } from 'lib/textParsers'

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 100%;
`

export interface DispatchPropsType {
  fetchPokemon: Function
  fetchPokemonTypes: Function
}

export interface StatePropsType {
  pokemonTypes: PokemonObjectType[]
}

type OwnPropsType = DispatchPropsType & StatePropsType

const Sidebar = ({
  fetchPokemon,
  fetchPokemonTypes,
  pokemonTypes,
}: OwnPropsType): JSX.Element => {
  //
  // ─── HOOKS ──────────────────────────────────────────────────────────────────────
  //

  const [filterInputValue, setFilterInputValue] = React.useState<string>('')

  React.useEffect(() => {
    fetchPokemonTypes()
  }, [fetchPokemonTypes])

  //
  // ─── EVENT LISTENERS ────────────────────────────────────────────────────────────
  //

  const handleChange = (event: React.ChangeEvent): void => {
    const { value } = event.target as HTMLInputElement
    setFilterInputValue(value)
  }

  const handleClick = (event: React.KeyboardEvent | React.MouseEvent): void => {
    const { value } = event.target as HTMLButtonElement
    fetchPokemon(value)
  }

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  const renderPokemonTypes = (): JSX.Element[] =>
    pokemonTypes
      .filter((pokemon: PokemonObjectType): boolean =>
        filterText(filterInputValue, pokemon.name)
      )
      .map(
        (pokemon: PokemonObjectType): JSX.Element => (
          <React.Fragment key={parseIdFromUrl(pokemon.url)}>
            <Button
              className="btn"
              data-testid="button-pokemon-type"
              onClick={handleClick}
              type="button"
              value={parseIdFromUrl(pokemon.url)}
            >
              {capitalize(pokemon.name)}
            </Button>
          </React.Fragment>
        )
      )

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>): void =>
        event.preventDefault()
      }
    >
      <input
        data-testid="input-filter"
        onChange={handleChange}
        placeholder="Type..."
        title="Filter from the list of available Pokemon types"
        type="text"
        value={filterInputValue}
      />
      <ButtonsContainer>{renderPokemonTypes()}</ButtonsContainer>
    </form>
  )
}

export default Sidebar
