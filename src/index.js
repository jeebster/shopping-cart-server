require('dotenv').config()

const Koa = require('koa')
const json = require('koa-json')
const cors = require('@koa/cors')
const logger = require('koa-logger')
const productsRouter = require('./routes/products')
const rootRouter = require('./routes/root')

const app = new Koa()

// Error handling
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.on('error', (err, ctx) => {
  /* centralized error handling:
   *   console.log error
   *   write error to log file
   *   save error and request information to database if ctx.request match condition
   *   ...
  */
 console.log(error)
})

app
  .use(logger())
  .use(json())
  .use(cors())
  .use(rootRouter.routes())
  .use(rootRouter.allowedMethods())
  .use(productsRouter.routes())
  .use(productsRouter.allowedMethods())

module.exports = app.listen(8080, '0.0.0.0')