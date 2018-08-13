import {
  FETCH_TABLES_REQUEST,
  FETCH_TABLES_SUCCESS,
  FETCH_TABLES_ERROR
} from '../actions/actionTypes'

const initialState = {
  tables: [],
  loading: false,
  error: null
}

const tables = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TABLES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case FETCH_TABLES_SUCCESS:
      return Object.assign({}, state, {
        tables: action.tables,
        loading: false,
        error: null
      });
    case FETCH_TABLES_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default: return state;
  }
}

export default tables;
