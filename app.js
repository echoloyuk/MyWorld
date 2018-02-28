const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const static = require('koa-static')
const mount = require('koa-mount')

// use xtemplate
const xtpl = require('xtpl/lib/koa2');
xtpl(app, {
  views: './app/views'
});

const index = require('./app/routes/index')
const manager = require('./app/routes/manager')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(mount('/assets', static(__dirname + '/assets')))

/**
 * middlewares for default layout
 * 走xtemplate，所有页面都走layout，再由layout分发
 * layout中的独占参数
 *  _realPath: 需要加载的xtpl
 */
app.use(async (ctx, next) => {
  ctx.renderTPL = async (path, option) => {
    let html = await ctx.render('layout', {
      _realPath: path,
      title: 'MyWorld',
      ...option
    })
    return html
  }
  await next();
});

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(manager.routes(), manager.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
