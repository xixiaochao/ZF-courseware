const koa = require('koa');
const app = new koa;
const router = require('koa-router')()

const static = require('koa-static');
//配置静态web服务的中间件

app.use(static(__dirname+'./www'));
router.get('/api/add',async (ctx,next)=>{
    let obj = ctx.request.query;
    let arr = ['name','time','price','hot','pic'];
    let ary = Object.keys(obj);

    ary.every(e=>{
        
    })
})
app.use(router.routes());
app.listen(80);