import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as actionCreators from './actionCreators'
import { FavouritesStateType } from './types'
import { PokemonNameIdType } from 'dux/pokemon/types'

type ActionReturnType = ThunkAction<
  void,
  FavouritesStateType,
  unknown,
  Action<string>
>

const addFavourite = ({
  memo,
  pokemon,
}: {
  memo: string
  pokemon: PokemonNameIdType
}): ActionReturnType => (dispatch: Dispatch) => {
  return dispatch(actionCreators.addFavourite({ memo, pokemon }))
}

const removeFavourite = (id: number): ActionReturnType => (
  dispatch: Dispatch
) => {
  return dispatch(actionCreators.removeFavourite(id))
}

export { addFavourite, removeFavourite }
