// @ts-check

/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    '@nuxt/eslint-config'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}

module.exports = config
