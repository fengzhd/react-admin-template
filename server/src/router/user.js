const router = require('koa-router')()
const user = require('../controllers/user')

router
      .post('/login', user.login)
      .get('/captcha', user.captcha)

module.exports = router