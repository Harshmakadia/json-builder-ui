module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "globals": {
        "$": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-param-reassign": 0,
        "func-names": ["error", "never"],
        "max-len": 0,
        "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
        "jsx-a11y/no-onchange": 0,
    }
};
