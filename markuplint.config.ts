import type { Config } from '@markuplint/ml-config'

// https://markuplint.dev/docs/configuration
const config: Config = {
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
    './.nuxt/**/*',
    './.output/**/*',
    './dist/**/*',
    './node_modules/**/*',
    './components/AppLogo.vue'
  ],
  nodeRules: [
    // https://element-plus.org/en-US/component/input.html
    {
      selector: 'el-input',
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
    },
    {
      selector: '#heading',
      rules: {
        'require-accessible-name': false
      }
    }
  ]
}

export default config
