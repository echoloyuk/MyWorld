const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  // ctx.body = await ctx.render('index', {
  //   title: 'huayun.mc'
  // })
  ctx.body = await ctx.superRender('index', {
    title: 'machi11'
  });
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
