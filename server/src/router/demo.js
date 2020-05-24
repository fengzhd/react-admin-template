const router = require('koa-router')()
const demo = require('../controllers/demo')

router
      .get('/', demo.getHome)
      .get('/list', demo.getList)
module.exports = router