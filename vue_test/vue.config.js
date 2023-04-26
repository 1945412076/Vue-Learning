
module.exports = ({
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },

	lintOnSave:false, //关闭语法检查
  // //开启代理服务器（方式一）
	// devServer: {
  //   proxy: 'http://localhost:5002'
  // }
  //开启代理服务器(方法二)
  devServer: {
    //websocket修改配置
  proxy: {
    '/api': {
      target: 'http://localhost:5002',
      pathRewrite:{'^/api':''},
      ws: true,
      changeOrigin: true
    },
    '/foo': {
      target: 'http://localhost:5001',
      pathRewrite:{'^/foo':''},
    }
      },
      host: '0.0.0.0',
      // https:true,
        port: 6103,
        client: {
          webSocketURL: 'ws://0.0.0.0:6103/ws',
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
  }
})
