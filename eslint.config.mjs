import globals from "globals"
import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"


export default [
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} },
    ...pluginJs.configs.recommended,
    rules: {
      ...eslintConfigPrettier.rules,
      "semi": ["error", "never"],
      "quotes": ["error", "double"],
      "no-unused-vars": "warn",
    }
  }
]