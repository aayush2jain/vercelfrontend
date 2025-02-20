const webpack= require('webpack');

module.exports = function override(config){
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback,{
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        path:require.resolve('path-browserify'),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        fs:false,
        http: require.resolve("stream-http"),
      assert: require.resolve("assert/"),
    //    url: require.resolve("url/"),
    //    vm: require.resolve("vm-browserify"),
       net:false
    });
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
           process:'process/browser'
        }),
    ]

    );
    return config
};