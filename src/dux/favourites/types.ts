export interface FavouritesByIdType {
  [id: number]: FavouritesType
}

export interface FavouritesType {
  id: number
  memo?: string
  name: string
  url: string
}

export interface FavouritesStateType {
  allIds: number[]
  byId: FavouritesByIdType
}
