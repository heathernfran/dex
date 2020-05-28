import React from 'react'
import styled from 'styled-components'

import { mixins } from 'styles'

import Content from './components/Content'
import Favourites from './components/Favourites'
import Sidebar from './components/Sidebar'

const StyledCol = styled.div`
  ${mixins.scrollable};
`

const StyledRow = styled.div`
  height: 100vh;
`

const App = (): JSX.Element => {
  return (
    <StyledRow className="grid grid-cols-3">
      <div className="col-span-3">
        <h1 className="text-2xl">Pokedex</h1>
      </div>

      <StyledCol className="col-span-1">
        <Sidebar />
      </StyledCol>
      <StyledCol className="col-span-1">
        <Content />
      </StyledCol>
      <StyledCol className="col-span-1">
        <Favourites />
      </StyledCol>
    </StyledRow>
  )
}

export default App
