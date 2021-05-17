const CLIEngine = require("eslint").CLIEngine;

const cli = new CLIEngine({
    baseConfig: {
        extends: ["eslint:recommended", "google"],
    },
    envs: ["browser", "es6", "node"],
    useEslintrc: false,
    rules: {
        semi: false,
        arrowParens: false,
        commaDangle: false,
        requirtJsdoc: false,
    }
});