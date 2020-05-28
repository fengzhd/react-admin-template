const Koa = require('koa');
const koaBody = require('koa-body');
const session = require('koa-session');
const router = require('./router')
const logger = require('./middleware/logger')
const response = require('./middleware/response')
const app = new Koa();

app.keys = ['some secret hurr'];
 
const CONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  secure: false, /** (boolean) secure cookie*/
  sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};
 
app.use(session(CONFIG, app));

// 请求体解析
app.use(koaBody())
// 为ctx对象添加统一的success和error方法进行数据统一格式返回
app.use(response)
// 日志
app.use(logger)
// 路由
app.use(router.routes())
app.on("error",(err,ctx)=>{//捕获异常记录错误日志
  console.log(new Date(),":",err);
});
module.exports = app