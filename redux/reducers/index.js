import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import bookingFormReducer from './bookingFormReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  accounts: bookingFormReducer
})

export default rootReducer
