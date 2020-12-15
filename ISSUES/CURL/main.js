const koa = require('koa2');
const kbb = require('koa-better-body');

const app = new koa();

app.use(kbb()); // init and use koa-better-body as main body parser

// response
app.use((ctx) => {
    console.log('got request: \n');
    console.log('headers:\n', ctx.req.headers);

    const contentType = ctx.request.headers['content-type'];
    console.log('heya------------------------contentType: ', contentType);
    switch (contentType) {
        case 'application/json':
            console.log(ctx.request.fields);
            break;
        case 'application/octet-stream':
            console.log(ctx.request.body);
            break;
        case 'text/plain':
            console.log(ctx.request.body);
            break;
        default:
            console.log(ctx.request.fields);
            break;
    }
    console.log('------------------------yahe');

    return (ctx.body = { msg: 'OK' });
});

app.listen(3333);
