const router = require('koa-router')();
const index = require('../controller/index');
const manager = require('../controller/manager');

// router.get('/manager', manager.index);
router.get('/manager', manager.dashboard);


module.exports = router