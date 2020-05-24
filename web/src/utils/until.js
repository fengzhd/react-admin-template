// 生成一个min到max且不为item的整数
export const getNotItemRandom = (min, max, item) => {
  let random = Math.floor(Math.random()*(max-min+1)+min)
  if (random === item) {
    random = getNotItemRandom(min, max, item)
  }
  return random
}
