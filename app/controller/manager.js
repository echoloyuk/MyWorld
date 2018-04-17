const dao = require('../dao/db');

module.exports = {
  index: async (ctx, next) => {

    const res = await dao.test('select * from users');
    console.log(res);
    console.log('@@@@@@@@@@@@@@@');

    ctx.body = await ctx.renderTPL('index', {
      title: '管理后台'
    })
  },
  dashboard: async (ctx, next) => {
    ctx.body = await ctx.renderTPL('manager/index', {
      title: '管理后台'
    });
  }
}