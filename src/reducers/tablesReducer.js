import * as types from '../actions/actionTypes'

const initialState = {
  tables: [],
  loading: false,
  error: null
}

const tables = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_TABLES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case types.FETCH_TABLES_SUCCESS:
      return Object.assign({}, state, {
        tables: action.tables,
        loading: false,
        error: null
      });
    case types.FETCH_TABLES_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default: return state;
  }
}

export default tables;
