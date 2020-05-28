const fs = require('fs');
const path = require('path')

// 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
// 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色

// 控制台输入内容处理
function Log(ctx, name, ms) {
  let request = ctx.method.toUpperCase();
  if (request === 'GET') {
      name += ` -- \x1B[44;39m【 %s 】\x1B[49;39m-- ${ctx.url};\x1B[49;39m`
  } else if (request === 'POST') {
      name += ` -- \x1B[42;39m【 %s 】\x1B[49;39m-- ${ctx.url};\x1B[49;39m`
  } else if (request === 'DELETE') {
      name += ` -- \x1B[41;39m【 %s 】\x1B[49;39m -- ${ctx.url};\x1B[49;39m`
  } else if (request === 'PATCH') {
      name += ` -- \x1B[45;39m【 %s 】\x1B[49;39m -- ${ctx.url};\x1B[49;39m`
  } else {
      name += ` -- \x1B[46;39m【 %s 】\x1B[49;39m-- ${ctx.url};\x1B[49;39m`
  }

  if (ms || ms === 0) name += ` ${ms}ms`;
  return [name, request];
}

// 日志输出
module.exports = async (ctx, next) => {
  let errMsg = null

  // 请求开始阶段
  const start = new Date();
  // 执行业务逻辑
  try {
    await next();
  } catch (err) {
    errMsg = err.stack
  }
  // 计算业务逻辑花费的时间
  const ms = new Date - start;
  let msg = `
    =======================
    ${start}
    ${Log(ctx, '请求')}
    ${errMsg ? errMsg : ''}
    ${Log(ctx, '返回', ms)}
    =======================
  `
  fs.appendFile(path.join(__dirname,'../logger/index.log'), msg, {}, err => {})
};
