import { GET_NEW_LIST, SET_NEWS_LIST } from './actionTypes'
import { getListApi } from 'api/index'
const getListStart = () => {
  return {
    type: GET_NEW_LIST
  }
}
const setListToStore = (list) => {
  return {
    type: SET_NEWS_LIST,
    list
  }
}
export const getListData = () => {
  return dispatch => {
    dispatch(getListStart())
    return getListApi().then(res => {
      dispatch(setListToStore(res.data))
    })
  }
}