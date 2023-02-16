const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/index.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
router.render = (req, res) => {
    res.jsonp({
        code: 200,
        data: res.locals.data,
        msg: "操作成功"
    })
}
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running 3001')
})
