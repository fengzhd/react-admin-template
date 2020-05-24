import { GET_NEW_LIST, SET_NEWS_LIST } from 'actions/actionTypes'
const newsList = (state = {isLoading: false, list: []}, action) => {
  switch(action.type) {
    case GET_NEW_LIST:
      return {
        ...state,
        isLoading: true,
        list: []
      }
      break;
    case SET_NEWS_LIST:
      return {
        ...state,
        isLoading: false,
        list: action.list
      }
      break;
    default: 
      return state
  }
}
export default newsList