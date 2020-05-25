import React from 'react'
import { render } from '@testing-library/react'

import Favourites from './Favourites'

const defaultProps = {
  favourites: {},
  removeFavourite: jest.fn(),
}

describe('<Favourites />', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Favourites {...defaultProps} />)

    expect(getByTestId('heading-favourites')).toBeInTheDocument()
  })

  it('renders all favourite Pokemon', () => {
    const props = {
      ...defaultProps,
      favourites: {
        25: {
          id: 25,
          name: 'pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/',
        },
        26: {
          id: 26,
          name: 'raichu',
          url: 'https://pokeapi.co/api/v2/pokemon/26/',
        },
      },
    }

    const { getAllByTestId, queryByText } = render(<Favourites {...props} />)

    expect(getAllByTestId('favourite-pokemon')).toHaveLength(2)
    expect(queryByText(/Memo/)).not.toBeInTheDocument()
  })

  it('renders a Card for a favourite Pokemon', () => {
    const props = {
      ...defaultProps,
      favourites: {
        25: {
          id: 25,
          memo: 'Note to self',
          name: 'pikachu',
          url: 'https://pokeapi.co/api/v2/pokemon/25/',
        },
      },
    }

    const { getByTestId, getByText } = render(<Favourites {...props} />)

    expect(getByTestId('favourite-pokemon-name').textContent).toBe('Pikachu')
    expect(getByText(/Memo/)).toBeInTheDocument()
  })
})
