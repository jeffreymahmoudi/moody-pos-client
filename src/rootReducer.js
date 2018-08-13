import { combineReducers } from 'redux'
import menuReducer from './reducers/menuReducer'
import tablesReducer from './reducers/tablesReducer'


const rootReducer = combineReducers({
  menu: menuReducer,
  tables: tablesReducer,
})

export default rootReducer
