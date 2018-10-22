const http = require('http')
const chalk = require('chalk')
const path = require('path')
const cfg = require('./config/defaultConfig')
const route = require('./helper/route')

const server = http.createServer((req, res) => {
    const filePath = path.join(cfg.root, req.url)
    route(req, res, filePath)
})
server.listen(cfg.port, cfg.host, () => {
    const address = `http://${cfg.host}:${cfg.port}`
    console.info(`Server started at ${chalk.green(address)}`);
})