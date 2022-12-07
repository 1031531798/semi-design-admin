const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    try {
        const proxyList = JSON.parse(process.env.REACT_APP_API.replace(/\\n/g, '\n'))
        proxyList.forEach(proxy => {
            const pathRewrite = {
                [`^${proxy[0]}`]: ''
            }
            app.use(
                proxy[0],
                createProxyMiddleware({
                    target: proxy[1],
                    changeOrigin: true,
                    pathRewrite
                })
            );
        })
    }catch {

    }
};
