// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/ja/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    '@munierujp'
  ],
  env: {
    browser: true
  }
}

module.exports = config
