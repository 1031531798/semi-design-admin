import { createProxyMiddleware }  from "http-proxy-middleware";
module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "服务地址:域名",
            changeOrigin: true,
        })
    );
};
