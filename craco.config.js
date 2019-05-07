const BabelRcPlugin = require("@jackwilsdon/craco-use-babelrc");
const CracoLessPlugin = require("craco-less");
const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");

module.exports = function({ env }) {
    return {
        babel: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false,
                        targets: {
                            node: "current"
                        }
                    }
                ],
                ["@babel/preset-react"]
            ],
            plugins: [
                [
                    "@babel/plugin-proposal-decorators",
                    {
                        legacy: true
                    }
                ]
            ]
            // loaderOptions: { /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */ },
            // loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
        },
        // jest: {
        //     babel: {
        //         addPresets: [
        //             [
        //                 "@babel/preset-env",
        //                 {
        //                     modules: false,
        //                     targets: {
        //                         node: "current"
        //                     }
        //                 }
        //             ],
        //             "jest",
        //             ["@babel/preset-react"]
        //         ] /* (default value) */,
        //         addPlugins: [
        //             [
        //                 "@babel/plugin-proposal-decorators",
        //                 {
        //                     legacy: true
        //                 }
        //             ],
        //             ["@babel/plugin-syntax-class-properties"],
        //             [
        //                 "@babel/plugin-proposal-class-properties",
        //                 {
        //                     loose: true
        //                 }
        //             ],
        //             "@babel/plugin-transform-runtime",
        //             ["react-hot-loader/babel"]
        //         ] /* (default value) */
        //     }
        //     // configure: {
        //     //     /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */
        //     // },
        //     // configure: (jestConfig, { env, paths, resolve, rootDir }) => {
        //     //     return jestConfig;
        //     // }
        // },
        plugins: [
            {
                plugin: CracoLessPlugin
                //     options: {
                //         lessLoaderOptions: {
                //             modifyVars: {
                //                 "@primary-color": "#1DA57A",
                //                 "@link-color": "#1DA57A",
                //                 "@border-radius-base": "2px"
                //             },
                //             javascriptEnabled: true
                //         }
                //     }
            },
            { plugin: reactHotReloadPlugin },
            { plugin: BabelRcPlugin }
        ]
    };
};
