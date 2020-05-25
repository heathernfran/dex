import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from 'dux/store'

import App from './App'

describe('<App />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(getByText(/Pokedex/i)).toBeInTheDocument()
  })
})
