module.exports = {
    extends: "airbnb",
    parser: "babel-eslint",
    rules: {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "semi": [
            2,
            "never"
        ],
        "react/jsx-curly-spacing": [
            2,
            "always"
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    "plugins": [
        "react",
        "react-hooks",
        "jest",
    ],
    globals: {
        "document": true,
        "window": true
    },
    settings: {
      'import/resolver': {
            "babel-module": {}
        }
    },
    env: {
        "jest": true
    }
};
  