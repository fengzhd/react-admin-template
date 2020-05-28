module.exports = (ctx, next) => {
  ctx.success = (msg, data, code = 200) => {
    ctx.body = {
      code,
      msg,
      data
    }
  }
  ctx.error = (msg, code = -1) => {
    ctx.body = {
      code,
      msg
    }
  }
  next()
}