import { FavouritesStateType, FavouritesByIdType } from './types'

interface SelectorsType {
  favourites: FavouritesStateType
}

const getFavourites = (state: SelectorsType): FavouritesByIdType =>
  state.favourites.byId

const getFavouritesIds = (state: SelectorsType): number[] =>
  state.favourites.allIds

export { getFavourites, getFavouritesIds }
