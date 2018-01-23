const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

// const main = (ctx, next) => {
//
//   ctx.response.body = 'hello koa'
// }
//
// const about = (ctx, next) => {
//   console.log('run koa!')
//   ctx.response.type = 'html'
//   ctx.response.body = '<a href="/">index</a>'
// };
//
// router.get('/', main)
// router.get('/about', about)
//
// app.use(router.routes())
//   .use(router.allowedMethods());

const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  // next();
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);