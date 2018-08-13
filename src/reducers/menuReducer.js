import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_ERROR
} from '../actions/actionTypes'

const initialState = {
  menu: [],
  loading: false,
  error: null
}

const menu = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MENU_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case FETCH_MENU_SUCCESS:
      return Object.assign({}, state, {
        menu: action.menu,
        loading: false,
        error: null
      });
    case FETCH_MENU_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default: return state;
  }
}

export default menu;
