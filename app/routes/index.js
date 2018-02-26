const router = require('koa-router')();
const index = require('../controller/index');
const manager = require('../controller/manager');

router.get('/', index.index);
router.get('/manager', manager.index);

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
