const svgCaptcha = require('svg-captcha');
// 验证码
const captcha = async ctx => {
  let captcha = svgCaptcha.create({
    width: 100,
    height: 40
  });
  ctx.session.captcha = captcha.text.toLowerCase();
  ctx.success('验证码', {
    captcha: captcha.data
  })
}
// 登录
const login = async ctx => {
  if (ctx.session.isLogin) {
    ctx.error('已经登录', -1)
  } else {
    let body = ctx.request.body
    let msg = '登录成功'
    let isLogin = true
    if (body.username !== 'admin') {
      msg = '用户名或密码错误1'
      isLogin = false
    }
    if (body.password !== 'admin') {
      msg = '用户名或密码错误2'
      isLogin = false
    }
    if (body.captcha.toLowerCase() !== ctx.session.captcha) {
      msg = '验证码错误'
      isLogin = false
    }
    if(isLogin) {
      ctx.session.isLogin = true;
      ctx.success(msg, {
        userName: 'admin'
      })
    } else {
      ctx.error(msg, 401)
    }
  }
  
}

module.exports = {
  login,
  captcha
}