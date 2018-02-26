module.exports = {
  index: async (ctx, next) => {
    ctx.body = await ctx.renderTPL('index', {
      title: 'test'
    });
  }
}