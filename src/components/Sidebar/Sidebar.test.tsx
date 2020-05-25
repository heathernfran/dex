import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Sidebar from './Sidebar'

const defaultProps = {
  fetchPokemon: jest.fn(),
  fetchPokemonTypes: jest.fn(),
  pokemonTypes: [
    { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' },
    { name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' },
    { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
  ],
}

describe('<Sidebar />', () => {
  it('renders with default props', () => {
    const { getAllByTestId, getByTestId } = render(
      <Sidebar {...defaultProps} />
    )

    expect(defaultProps.fetchPokemonTypes).toBeCalled()
    expect(getAllByTestId('button-pokemon-type')).toHaveLength(3)
    expect(getByTestId('input-filter')).toBeInTheDocument()
  })

  it('renders the buttons from props', () => {
    const { getAllByTestId } = render(<Sidebar {...defaultProps} />)
    const buttons = getAllByTestId('button-pokemon-type') as HTMLButtonElement[]

    expect(buttons[0].value).toBe('1')
    expect(buttons[0].textContent).toBe('Normal')
    expect(buttons[1].value).toBe('2')
    expect(buttons[1].textContent).toBe('Fighting')
    expect(buttons[2].value).toBe('3')
    expect(buttons[2].textContent).toBe('Flying')
  })

  it('updates the input value', () => {
    const { getByTestId } = render(<Sidebar {...defaultProps} />)
    const input = getByTestId('input-filter') as HTMLInputElement

    expect(input.value).toBe('')

    fireEvent.change(input, { target: { value: 'fl' } })

    expect(input.value).toBe('fl')
  })
})
