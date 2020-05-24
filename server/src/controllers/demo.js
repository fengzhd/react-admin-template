const { sleep } = require('../utils/index')
const getList = async ctx => {
  let arr = []
  console.log(1)
  for (let i = 0; i < 10; i++) {
    arr.push({
      id: i + 1,
      name: '新闻' + (i + 1)
    })
  }
  await sleep(1000)
  ctx.body = arr
}
const getHome = async ctx => {
  ctx.body = 'getHome'
}
module.exports = {
  getList,
  getHome
}