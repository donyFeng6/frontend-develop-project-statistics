module.exports = {
    root: true,
    "env": {
        "node": true,
        "commonjs": true,
        "browser": true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react-hooks"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    settings: {
        react: {
            version: "detect",
            pargma: "React",
        },
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-unused-vars": [0, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        "react/prop-types": "off",
        "react/self-closing-comp": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
};