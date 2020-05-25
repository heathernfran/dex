import { PokemonNameIdType } from 'dux/pokemon/types'

export enum types {
  ADD_FAVOURITE = 'favourites/ADD_FAVOURITE',
  REMOVE_FAVOURITE = 'favourites/REMOVE_FAVOURITE',
}

interface PayloadType {
  memo: string
  pokemon: PokemonNameIdType
}

interface AddFavouriteType {
  payload: PayloadType
  type: types.ADD_FAVOURITE
}

interface RemoveFavouriteType {
  payload: number
  type: types.REMOVE_FAVOURITE
}

export type ActionType = AddFavouriteType | RemoveFavouriteType

const addFavourite = (payload: PayloadType): ActionType => ({
  type: types.ADD_FAVOURITE,
  payload,
})

const removeFavourite = (payload: number): ActionType => ({
  type: types.REMOVE_FAVOURITE,
  payload,
})

export { addFavourite, removeFavourite }
