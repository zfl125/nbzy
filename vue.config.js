// vue.config.js
module.exports = {
    publicPath: './',
    outputDir: 'bigdata',
    productionSourceMap: false,
    css: {
        loaderOptions: {
            postcss: {
                ident: 'postcss',
                plugins: () => [
                    require('postcss-pxtorem')({
                        rootValue: 17, // 换算的基数
                        selectorBlackList: [], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]

            }
        }
    },
    devServer: {
        proxy: {
            '/': {
                // target: 'http://localhost:8000',
                // target: 'https://test.ijiedao.cn',
                target: 'https://ddzhdj.nbcc.cn',
                // target: 'http://10.0.197.240:8080',
                changeOrigin: true,
            },

        }
    }
}