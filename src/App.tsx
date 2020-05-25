import React from 'react'
import { Layout } from 'element-react'
import styled from 'styled-components'

import { mixins } from 'styles'

import Content from './components/Content'
import Favourites from './components/Favourites'
import Sidebar from './components/Sidebar'

const StyledLayoutCol = styled(Layout.Col)`
  ${mixins.scrollable};
`

const StyledLayoutRow = styled(Layout.Row)`
  height: 100vh;
`

const App = (): JSX.Element => {
  return (
    <StyledLayoutRow justify="space-between">
      <h1>Pokedex</h1>

      <StyledLayoutCol span={6}>
        <Sidebar />
      </StyledLayoutCol>
      <StyledLayoutCol span={12}>
        <Content />
      </StyledLayoutCol>
      <StyledLayoutCol span={6}>
        <Favourites />
      </StyledLayoutCol>
    </StyledLayoutRow>
  )
}

export default App
