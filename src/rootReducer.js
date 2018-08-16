import { combineReducers } from 'redux'
import menuReducer from './reducers/menuReducer'
import tablesReducer from './reducers/tablesReducer'
// import selectedTableReducer from './reducers/selectedTableReducer'
import checksReducer from './reducers/checksReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  tables: tablesReducer,
  // selectedTable: selectedTableReducer,
  checks: checksReducer,
})

export default rootReducer
