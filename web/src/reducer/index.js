import { combineReducers } from 'redux'
import counter from 'reducer/counter.js'
import newsList from 'reducer/newsList.js'
const reducers = combineReducers({
  counter,
  newsList
})
export default reducers
