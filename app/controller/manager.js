const dao = require('../dao/db');

module.exports = {
  index: async (ctx, next) => {

    const res = await dao.test('select * from articles');
    console.log(res);
    console.log('@@@@@@@@@@@@@@@');

    ctx.body = await ctx.renderTPL('index', {
      title: '管理后台'
    })
  }
}