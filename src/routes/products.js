const fs = require('fs').promises
const path = require('path')
const Router = require('koa-router')
const router = new Router()

router.get('/products', async (ctx, next) => {
  // Hard-coding test data for time constraints.
  // This would normally be surfaced from a database via a unit-testable query service/object
  const filePath = path.resolve(__dirname, '../../data/products.json')
  ctx.body = await fs.readFile(filePath, 'utf-8')
})

module.exports = router