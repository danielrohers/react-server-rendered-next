module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "max-len": ["error", 150, 2],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

      // disable
      "import/no-extraneous-dependencies": "off",
      "import/no-unresolved": "off",
      "react/prefer-stateless-function": "off",
    }
};
