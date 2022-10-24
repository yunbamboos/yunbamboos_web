module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    indent: [4, 4], // 缩进2个空格
    semi: [2, 'never'], // 要求或禁止使用分号代替 ASI,即禁用行尾使用分号
    quotes: [2, 'single'], // 使用单引号
    'no-mixed-spaces-and-tabs': [2], // 禁止空格和 tab 的混合缩进
    'no-extra-semi': [2], // 禁止不必要的分号
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'no-console': 0,
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'warn',
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none'
      }
    ],
    'vue/no-unused-vars': 'warn',
    'no-prototype-builtins': 'off',
    'no-irregular-whitespace': 'off',
    'space-before-function-paren': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-setup-props-destructure': 'off',
    'vue/multi-word-component-names': 'off' // 关闭多个单词命名
  }
}
