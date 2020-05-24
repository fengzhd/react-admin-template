import { INCREASE, DECREASE } from './actionTypes'
export const increase = (num) => {
  return {
    type: INCREASE,
    num
  }
}
export const decrease = (num) => {
  return {
    type: DECREASE,
    num
  }
}