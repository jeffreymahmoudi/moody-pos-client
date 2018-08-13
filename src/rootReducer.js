import { combineReducers } from 'redux'
import menuReducer from './reducers/menuReducer'
import tablesReducer from './reducers/tablesReducer'
import selectedTableReducer from './reducers/selectedTableReducer'


const rootReducer = combineReducers({
  menu: menuReducer,
  tables: tablesReducer,
  selectedTable: selectedTableReducer,
})

export default rootReducer
