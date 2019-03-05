module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/wph': {
                target: 'https://h5.vip.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/wph': ''
                }
            },
            'dt': {
                target: 'https://www.duitang.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/dt': ''
                }
            }
        }
    }
}