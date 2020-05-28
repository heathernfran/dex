import React from 'react'
import styled from 'styled-components'

import { FavouritesType, FavouritesByIdType } from 'dux/favourites/types'

import { capitalize } from 'lib/textParsers'

import { mixins } from 'styles'

const StyledCard = styled.div`
  width: 100%;
`

const StyledFavourites = styled.div`
  ${mixins.centeredFlex};
  flex-direction: column;
`

const CardSubheading = styled.div`
  ${mixins.centeredFlex};
  justify-content: space-between;
`

export interface DispatchPropsType {
  removeFavourite: Function
}

export interface StatePropsType {
  favourites: FavouritesByIdType
}

type OwnPropsType = DispatchPropsType & StatePropsType

const Favourites = ({
  favourites,
  removeFavourite,
}: OwnPropsType): JSX.Element => {
  //
  // ─── EVENT LISTENERS ────────────────────────────────────────────────────────────
  //

  const handleClick = (id: number): void => {
    removeFavourite(id)
  }
  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  const renderFavourites = (): JSX.Element[] =>
    Object.values(favourites).map(
      (favourite: FavouritesType): JSX.Element => (
        <StyledCard key={favourite.id}>
          <CardSubheading data-testid="favourite-pokemon">
            <h3 data-testid="favourite-pokemon-name">
              {capitalize(favourite.name)}
            </h3>
            <button
              className="btn btn-blue"
              onClick={() => handleClick(favourite.id)}
              title="Remove Pokemon from favourites"
            >
              Remove
            </button>
          </CardSubheading>
          {favourite.memo && <p>Memo: {favourite.memo}</p>}
        </StyledCard>
      )
    )

  return (
    <StyledFavourites>
      <h2 data-testid="heading-favourites">My Favourites</h2>
      {!Object.keys(favourites).length ? (
        <p>No items here</p>
      ) : (
        renderFavourites()
      )}
    </StyledFavourites>
  )
}

export default Favourites
