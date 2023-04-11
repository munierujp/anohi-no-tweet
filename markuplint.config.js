// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('@markuplint/ml-config').Config} Config */

/**
 * @type {Config}
 * @see https://markuplint.dev/docs/configuration
 */
const config = {
  extends: [
    'markuplint:recommended'
  ],
  parser: {
    '\\.vue$': '@markuplint/vue-parser'
  },
  specs: {
    '\\.vue$': '@markuplint/vue-spec'
  },
  excludeFiles: [
    './node_modules/**/*'
  ],
  nodeRules: [
    {
      selector: 'v-text-field',
      rules: {
        'invalid-attr': {
          options: {
            allowAttrs: [
              {
                name: 'autofocus',
                value: {
                  type: 'Boolean'
                }
              }
            ]
          }
        }
      }
    }
  ]
}

module.exports = config
