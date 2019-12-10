// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
    // setupFiles: ["<rootDir>/packages/tests/jest.setup.js"],
    // setupFilesAfterEnv: ["<rootDir>/packages/tests/rootSetup.js"],
    displayName: "Apps",
    testMatch: ["<rootDir>/tests/**/*.[jt]s?(x)"],
    // moduleNameMapper: {
        // "@fkit": path.resolve(__dirname, "./packages/fkit/dist/fkit.js")
    // },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
    verbose: true,
    testPathIgnorePatterns: ["jest.config.js", "/node_modules/"],
    moduleDirectories: ["node_modules"],
    // transform: {
    //     "^.+\\.(css|less)": "./styleMock.js",
    //     // "\\.(css|less)$": "identity-obj-proxy",
    //     "(.*?)packages/stores(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/apps(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/apps/project_apps/todos/stores(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/tests(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/fkit/components/(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/tests/__tests__/Components/(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/fkit/playground/(.*?).(js|jsx)?$": "babel-jest",
    //     "(.*?)packages/common(.*?).(js|jsx)?$": "babel-jest"
    // },

    globals: {
    },

    //packages/apps/project_apps/todos/views/Todos.js
    reporters: ["default", "jest-github-reporter", "jest-junit"],
    coverageDirectory: "src",
    // collectCoverageFrom: ["<rootDir>/packages/tests", "!<rootDir>/packages/tests/Components"],
    coverageReporters: ["json", "lcov", "text", "clover"],
    // coveragePathIgnorePatterns: [
    //     "application",
    //     "(.*?)/views(.*?)?$",
    //     "(.*?)/__tests__/Components(.*?)?$"
    // ]
    // coverageThreshold: {
    //     global: {
    //         branches: 50,
    //         functions: 50,
    //         lines: 50,
    //         statements: 50
    //     },
    //     "./src/components/": {
    //         branches: 40,
    //         statements: 40
    //     },
    //     "./src/reducers/**/*.js": {
    //         statements: 90
    //     },
    //     "./src/api/very-important-module.js": {
    //         branches: 100,
    //         functions: 100,
    //         lines: 100,
    //         statements: 100
    //     }
    // }
};
