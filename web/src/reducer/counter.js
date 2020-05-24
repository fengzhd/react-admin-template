import { INCREASE, DECREASE } from 'actions/actionTypes'
const counter = (state = 0, action) => {
  switch(action.type) {
    case INCREASE:
      return state + action.num
      break;
    case DECREASE:
      return state - action.num
      break;
    default: 
      return state
  }
}
export default counter