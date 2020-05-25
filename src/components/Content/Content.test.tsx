import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Content from './Content'

const defaultProps = {
  addFavourite: jest.fn(),
  favouritesIds: [],
  pokemon: {},
  pokemonType: '',
}

describe('<Content />', () => {
  it('renders with default props', () => {
    const { getByTestId, queryByTestId } = render(<Content {...defaultProps} />)

    expect(getByTestId('heading-pokemon-type')).toHaveTextContent('')
    expect(queryByTestId('pokemon-card')).not.toBeInTheDocument()
  })

  it('renders all Pokemon for a given type', () => {
    const props = {
      ...defaultProps,
      pokemon: {
        4: {
          id: 4,
          name: 'charmander',
          url: 'https://pokeapi.co/api/v2/pokemon/4/',
        },
        5: {
          id: 5,
          name: 'charmeleon',
          url: 'https://pokeapi.co/api/v2/pokemon/5/',
        },
        6: {
          id: 6,
          name: 'charizard',
          url: 'https://pokeapi.co/api/v2/pokemon/6/',
        },
      },
      pokemonType: 'fire',
    }

    const { getAllByTestId, getByTestId } = render(<Content {...props} />)

    expect(getByTestId('heading-pokemon-type').textContent).toBe('Fire')
    expect(getAllByTestId('pokemon-card')).toHaveLength(3)
  })

  it('renders a Card for a Pokemon', () => {
    const props = {
      ...defaultProps,
      pokemon: {
        4: {
          id: 4,
          name: 'charmander',
          url: 'https://pokeapi.co/api/v2/pokemon/4/',
        },
      },
    }

    const { getByTestId, getByText } = render(<Content {...props} />)

    expect(getByTestId('pokemon-card').textContent).toBe('Charmander')
    expect(getByText('#4')).toBeInTheDocument()
  })

  it('disables the add favourite button for a favourite Pokemon', () => {
    const props = {
      ...defaultProps,
      favouritesIds: [4],
      pokemon: {
        4: {
          id: 4,
          name: 'charmander',
          url: 'https://pokeapi.co/api/v2/pokemon/4/',
        },
      },
    }

    const { getByTestId } = render(<Content {...props} />)
    const button = getByTestId('button-add-favourite') as HTMLButtonElement

    expect(button.disabled).toBe(true)
  })
})
