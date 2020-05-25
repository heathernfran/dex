import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { actionCreators, selectors } from 'dux/favourites'
import { FavouritesStateType } from 'dux/favourites/types'

import Favourites, { DispatchPropsType, StatePropsType } from './Favourites'

interface StateType {
  favourites: FavouritesStateType
}

const mapStateToProps = (state: StateType): StatePropsType => ({
  favourites: selectors.getFavourites(state),
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchPropsType =>
  bindActionCreators(
    {
      removeFavourite: actionCreators.removeFavourite,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
